import { createContext, useReducer } from "react";
import { PropTypes } from "prop-types";

// export const user_data = createContext({ email: "", password: "", });
export const user_data = createContext({
  userDetail: {},
  add_user: () => { },
  tasks: [],
  add_task: () => { },
});


const reducer1 = (currentData, action) => {
  // const newvalue = currentData;
  // if (action.type === 'adduser') { localStorage.setItem("userdata", JSON.stringify(action.payload)) }
  let newdata = action.payload;
  return newdata;
};
const reducer2 = (currentData, action) => {
  let newdata = currentData;
  if (action.type === 'addtask') {
    newdata = action.payload
  }
  console.log(newdata);
  return newdata;
}

const ContextProvider = ({ children }) => {
  const [userDetail, dispatchData] = useReducer(reducer1, {});
  // const [token, dispatchToken] = useReducer(reducer2, "eyJhbGciOiJIUzI1NiIsImtpZCI6IlFCaE1kZGZpdFdCM1VOcDAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzExMjAyMTA4LCJpYXQiOjE3MTExOTg1MDgsImlzcyI6Imh0dHBzOi8veXJubnBkZ3V3amJrYndkZ3lpa2guc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjQ3MDUzOGQ1LTRjYTktNGE0Yy05N2FkLTlkMzNkNjIyYTZkYyIsImVtYWlsIjoiZGZnZGdkZ2RmZ0BnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsIjoiZGZnZGdkZ2RmZ0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiNDcwNTM4ZDUtNGNhOS00YTRjLTk3YWQtOWQzM2Q2MjJhNmRjIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MTExOTg1MDh9XSwic2Vzc2lvbl9pZCI6ImYwZmU2YjcwLTg1NmMtNGU0MC1hZTBjLTliNGUxYjg4YzI4NyIsImlzX2Fub255bW91cyI6ZmFsc2V9.sVVNAzw1NYh7xyIUfGaIexKN62JBH46SJyuGWsxsxOE");
  const [tasks, dispatchTasks] = useReducer(reducer2, []);

  const add_user = (parm) => {
    console.log(parm);
    dispatchData({ type: 'adduser', payload: parm });
  };
  const add_task = (parm) => {
    console.log(parm);
    dispatchTasks({ type: 'addtask', payload: parm });
  }
  return (
    <user_data.Provider value={{ userDetail, add_user, tasks, add_task }}>
      {children}
    </user_data.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ContextProvider;
