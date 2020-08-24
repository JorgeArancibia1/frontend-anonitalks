import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postsStartLoading } from "../actions/postAction";

const refreshEfectt2 = (param) => {
  const dispatch = useDispatch();

  const ta = () => {
    dispatch(postsStartLoading());
  };

  useEffect(() => {
    ta;
  }, [param]);
};
return refreshEfectt2;
