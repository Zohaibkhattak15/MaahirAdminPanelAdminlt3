import React, {createContext, useContext, useState, useCallback} from "react";
import {isEqual, isFunction} from "lodash";
import {initialFilter} from "./CustomersUIHelpers";

const PostsUIContext = createContext();

export function usePostsUIContext() {
  return useContext(PostsUIContext);
}

export const PostsUIConsumer = PostsUIContext.Consumer;

export function PostsUIProvider({customersUIEvents, children}) {
  const [queryParams, setQueryParamsBase] = useState(initialFilter);
  const [ids, setIds] = useState([]);
  const setQueryParams = useCallback(nextQueryParams => {
    setQueryParamsBase(prevQueryParams => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  const initCustomer = {
    id: undefined,
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    gender: "",
    status: 0,
    dateOfBbirth: "",
    ipAddress: "",
    type: 1
  };

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    initCustomer,
    newCustomerButtonClick: customersUIEvents.newCustomerButtonClick,
    openEditPostDialog: customersUIEvents.openEditPostDialog,
    openDeletePostDialog: customersUIEvents.openDeletePostDialog,
    openDeleteCustomersDialog: customersUIEvents.openDeleteCustomersDialog,
    openFetchCustomersDialog: customersUIEvents.openFetchCustomersDialog,
    openUpdateCustomersStatusDialog: customersUIEvents.openUpdateCustomersStatusDialog
  };

  return <PostsUIContext.Provider value={value}>{children}</PostsUIContext.Provider>;
}