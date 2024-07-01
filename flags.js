
// this actually works but it doesn't do anything wtih the information we're getting from the APi after getting it.  I'm forgetting to do something.
async function getFlagData() {
    try 
    {
        country = document.getElementById('flag-info');
        const API_URL = `https://restcountries.com/v3.1/all`;
        console.log(country);
        // CALL THE FLAG API API HERE!
        const data = await fetch(API_URL);
        const dataWithJson = await data.json();
        const gridContainer = document.getElementById("container")

        for (const country in dataWithJson)
            {                                           
               console.log(dataWithJson[country].flags.png);
               const divElement = document.createElement("div");
               divElement.setAttribute("class", "grid-item");
               const imageElement = document.createElement("img");
               imageElement.setAttribute("src", dataWithJson[country].flags.png)
               const countryName = document.createElement("p");
               const names = document.createTextNode(dataWithJson[country].name.official);
               const countryMaps = document.createElement("a");
               const maps = document.createTextNode(dataWithJson[country].maps.googleMaps);
               countryMaps.setAttribute("href", dataWithJson[country].maps.googleMaps);
               //was trying to seea bout doing an onclick for the maps here to do a popup (modal):
               //but it wasn't working for some reason.
               //const restOfData = document.createElement("div");
               //restOfData.setAttribute("class", "modal" );
                              
               
               countryName.append(names)
               countryMaps.append(maps)
               //divElement.append(restOfData)
               

               divElement.append(imageElement)
               divElement.append(countryName)
               divElement.append(countryMaps)
               gridContainer.append(divElement)
                           

            }

    } catch(error) 
    {
        console.log(error);
    }

}

