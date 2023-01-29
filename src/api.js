import axios from "axios";

const searchImages = async (term) => {
  //the api url is from unsplash.com/ The /search/photos are additional option categories (like faker)
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    /*
      the 2nd param of axios method is the head and params objects. 
      headers: we got this from unsplash's authentication doc. 
      The access key after Client ID is our unique key from when we created app api
      This is also where any oauth, etc would be
    */
    headers: {
      Authorization: 'Client-ID GpayqDmNq57RFRTFJ2K9ioXn20G0vO3yps2du6H87aI' 
    },
    //params are additional search queries to narrow down our search
    params: {
      query: term,
    }
  });

  return response.data.results;
}

export default searchImages;