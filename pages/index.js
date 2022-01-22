import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountCard, AddCard, Form, Nav } from "../components";
import { fetchAccounts } from "../store/actions/account";

export default function Home() {
  const dispatch = useDispatch();
  const { accounts, isAdd, isEdit } = useSelector((state) => state.account);

  useEffect(() => {
    dispatch(fetchAccounts());
  }, []);

  return (
    <Fragment>
      <Nav />
      <div className="p-8 w-full h-screen dark:bg-gradient-to-tr from-slate-900 to-slate-800 transition duration-500">
        <div className="grid grid-cols-4 gap-4">
          {accounts?.map((account) =>
            isEdit === account.id ? (
              <Form account={account} key={account.id}/>
            ) : (
              <AccountCard account={account} key={account.id} />
            )
          )}
          {isAdd ? <Form /> : <AddCard />}
        </div>
      </div>
    </Fragment>
  );
}
