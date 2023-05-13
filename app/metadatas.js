const searchPublicationsByStringMd = {
    name: "searchPublicationsByString",
    args: "{searchTerm: str ,  extractVariables: list}",
    inputData: "",
    description: "This function takes a search string and a list of variables that need to be extracted for given search terms. It uses embeddings database to do the search and returns the rows that have high similarity wrt search term. Finally it keeps only the unique values for variables that we need to extract. The extract_variables can only take one of the following values ['content','post_id','profile_id','main_content_focus','language','block_timestamp','content_uri']",
    outputDescription: "List unique values of the variables to extract based on our semantic search criteria"
}

const semanticSearchPostTableMd = {
    name: "semanticSearchPostTable",
    args: "{searchTerm: str ,  extractVariables: list}",
    inputData: "",
    description: "This function takes a search string and a list of variables that need to be extracted for given search terms. It uses embeddings database to do the search and returns the rows that have high similarity wrt search term. Finally it keeps only the unique values for variables that we need to extract. The extract_variables can only take one of the following values ['content','post_id','profile_id','main_content_focus','language','block_timestamp','content_uri']",
    outputDescription: "List unique values of the variables to extract based on our semantic search criteria"
};

const getInformationFromLensMd = {
    name: "getInformationFromLens",
    args: "{queryString: str}",
    inputData: "",
    description: "This function takes a query string and asks chatGPT to create a GraphQL query based on human language query. After that, it executes that query to fetch results from lens protocol.",
    outputDescription: "JSON object respresenting information resquested"
};

const getProfileInformationFromLensMd = {
    name: "getProfileInformationFromLens",
    args: "{profileId: str, informationRequired}",
    inputData: "",
    description: "This function takes a lens profile ID or address, and information required and then gets information required from all the information available about that profile on the lens protocol.",
    outputDescription: "JSON object respresenting profile information"
};

const getProfileInformationFromAirstackMd = {
    name: "getProfileInformationFromAirstack",
    args: "{profileId: str, informationRequired}",
    inputData: "",
    description: "This function takes a lens profile ID or address , and information required and then gets information required from all the information available about that profile on the airstack.",
    outputDescription: "JSON object respresenting profile information"
};

const getProfileInformationFromTheGraphMd = {
    name: "get_profile_information_from_the_graph",
    args: "{profileId: str, informationRequired}",
    inputData: "",
    description: "This function takes a lens profile ID or address, and information required and then gets information required from all the information available about that profile on the the graph protocol.",
    outputDescription: "JSON object respresenting profile information"
};


const filterFollowersOfProfileIdMd = {
    name: "filterFollowersOfProfileId",
    args: "{userId: str, profileIds: []}",
    inputData: "",
    description: "Gets a list of profile ids, and another profile id that we call userId. It checks if the profile ids in the list follow the userId i.e. profile id of the user.",
    outputDescription: "Filtered profiles that only follow the given userID"
};

const summarizeProfileDataMd = {
    name: "summarizeProfileData",
    args: "{profileData: str}",
    inputData: "",
    description: "Gets a profile data in JSON format and summarizes it in detail.",
    outputDescription: "Human readable insigts about the provided profile data."
};

module.exports = [
    searchPublicationsByStringMd,
    semanticSearchPostTableMd, 
    getInformationFromLensMd,
    getProfileInformationFromLensMd,
    getProfileInformationFromAirstackMd,
    getProfileInformationFromTheGraphMd,
    filterFollowersOfProfileIdMd,
    summarizeProfileDataMd
]