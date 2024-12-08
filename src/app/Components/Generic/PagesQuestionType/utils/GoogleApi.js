export function loadGoogleMapsApi(maps_script_load) {
  // if (!maps_script_load) {
  //   var tf = document.createElement("script");
  //   tf.type = "text/javascript";
  //   tf.async = true;
  //   tf.setAttribute("loading", "async");
  //   tf.src =
  //     "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDd9Y3Ofcak8m1LpnvaGkKit6RDTGG0caU&libraries=places&ver=6.6.2";
  //   var s = document.getElementsByTagName("script")[0];
  //   s.parentNode.insertBefore(tf, s);

  //   setTimeout(function () {
  //     var options = {
  //       types: ["geocode"],
  //       componentRestrictions: {
  //         country: ["us"],
  //       },
  //     };

  //     if (typeof google != "undefined") {
  //       var autocomplete = new google.maps.places.Autocomplete(document.getElementById("address"), {
  //         options,
  //       });

  //       google.maps.event.addListener(autocomplete, "place_changed", function () {
  //         var addressLine1 = "";
  //         var addressLine2 = "";
  //         var addressLine3 = "";
  //         var city = "";
  //         var state = "";
  //         var country = "";
  //         var postal_code = "";
  //         var place = autocomplete.getPlace();

  //         // 	console.log(place.address_components);
  //         // 	console.log(place.formatted_address);

  //         for (var i = 0; i < place.address_components?.length; i++) {
  //           var addressType = place.address_components[i].types[0];
  //           var val = place.address_components[i].long_name;

  //           switch (addressType) {
  //             case "subpremise":
  //               addressLine1 += val + "/";
  //               break;

  //             case "street_number":
  //             case "route":
  //               addressLine1 += val + " ";
  //               break;

  //             case "sublocality_level_2":
  //               addressLine2 = val;
  //               break;

  //             case "locality":
  //             case "political":
  //             case "sublocality":
  //             case "sublocality_level_1":
  //               city = val;
  //               break;

  //             case "administrative_area_level_1":
  //               state = val;
  //               break;

  //             case "country":
  //               country = val;
  //               break;

  //             case "postal_code":
  //               postal_code = val;
  //               break;

  //             default:
  //           }

  //           if (addressLine1) jQuery("#address").val(addressLine1);
  //           if (city) jQuery("#city").val(city);
  //           if (state) jQuery("#state").val(state);
  //         }
  //       });
  //     }
  //   }, 1000);
  // }
  // maps_script_load = true;
  console.log("loading google map api");
}
