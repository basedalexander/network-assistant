export const semantic_search_post_table = {
    name: "semantic_search_post_table",
    args: "{search_term: str ,  extract_variables: list}",
    inputData: "",
    description: "This function takes a search string and a list of variables that need to be extracted for given search terms. It uses embeddings database to do the search and returns the rows that have high similarity wrt search term. Finally it keeps only the unique values for variables that we need to extract.",
    outputDescription: "List unique values of the variables to extract based on our semantic search criteria"
};

export async function searchPublicationsByString(input, args) {}