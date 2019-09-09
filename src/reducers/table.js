import queryString from 'query-string';

const parsed = queryString.parse(window.location.search);
const initialState = {
  table: [],
  page: parsed.page ? parsed.page : 1,
  tableData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, table: action.payload };
    case "GET_PAGE":
      return { ...state, page: action.payload };
    case "SEARCH":
      return { ...state, search: action.payload };
    case "INFO":
      return { ...state, popUpInfo: action.payload };
    default:
      return state;
  }
}

export default reducer;