function validateZipCode(zipCode: string) {
  return zipCode.length === 5 && /^\d+$/.test(zipCode);
}

export async function handleZipCodeChange(
  zipCode: string,
  updateFields: Function,
  setLocation: Function,
  setError: Function,
  setLoading: Function,
  checkIfInputValid: Function
) {
  setLocation(null);
  setError(null);

  if (validateZipCode(zipCode)) {
    setLoading(true);
    try {
      const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
      if (!response.ok) {
        throw new Error("Invalid Zip Code");
      }
      checkIfInputValid(true);
      const res = await response.json();
      if (res.places && res.places.length > 0) {
        const state = res.places[0]["state"];
        const stateAbbreviation = res.places[0]["state abbreviation"];
        setLocation(`${state}, ${stateAbbreviation}`);
        updateFields({ zipCode, state, stateAbbreviation });
      }
    } catch (error) {
      setError("Invalid Zip Code");
      checkIfInputValid(false);
    } finally {
      setLoading(false);
    }
  } else {
    checkIfInputValid(false);
  }
}
