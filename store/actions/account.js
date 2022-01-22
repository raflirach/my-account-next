import axios from "axios";

const baseUrl = "http://localhost:4000"

const fetch_accounts = (payload) => {
  return {
    type: "FETCH_ACCOUNTS", 
    payload
  }  
}

export const setIsAdd = (payload) => {
  return {
    type: "CHANGE_IS_ADD",
    payload
  }
}

export const setIsEdit = (payload) => {
  return {
    type: "CHANGE_IS_EDIT",
    payload
  }
}

export const fetchAccounts = () => {
  return async (dispatch) => {
    try {
      const { data: accounts } = await axios({
        url: `${baseUrl}/accounts`
      })
      dispatch(fetch_accounts(accounts))  
    } catch (err) {
      console.log(err.response?.data);
    }
  }
}

export const addAccounts = (payload) => {
  return async (dispatch, getState) => {
    try {
      const {data} = await axios({
        url: `${baseUrl}/accounts`,
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(payload)
      })

      const { accounts } = getState().account
      const newData = [...accounts, data]

      dispatch(fetch_accounts(newData))
      dispatch(setIsAdd(false))
    } catch (err) {
      console.log(err)
    }
  }
}

export const editAccounts = (id, payload) => {
  return async (dispatch, getState) => {
    try {
      const {data} = await axios({
        url: `${baseUrl}/accounts/${id}`,
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(payload)
      })

      const { accounts } = getState().account
      const newData = accounts.map(e => {
        if (e.id === data.id) e = data;
        return e
      })

      dispatch(fetch_accounts(newData))
      dispatch(setIsEdit(Infinity))
    } catch (err) {
      console.log(err)
    }
  }
}

export const deleteAccount = (id) => {
  return async (dispatch, getState) => {
    try {
      const {data} = await axios({
        url: `${baseUrl}/accounts/${id}`,
        method: 'DELETE'
      })
      
      const { accounts } = getState().account
      let newData = []
      accounts.forEach(e => {
        if (e.id !== +id) newData.push(e)
      })

      dispatch(fetch_accounts(newData))
      dispatch(setIsEdit(Infinity))
    } catch (err) {
      console.log(err)
    }
  }
}