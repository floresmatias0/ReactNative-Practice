import { useState, useRef, useEffect } from "react";
import { ReqResList, User } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqRes";

export const useUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const pageRef = useRef(1);
  
    useEffect(() => {
      //llamado al API
      loadUser();
    }, []);
    
    const loadUser = async () => {
        const resp = await reqResApi.get<ReqResList>('/users', {
            params: {
                page: pageRef.current
            }
        });
        if(pageRef.current > resp.data.total_pages) {
            pageRef.current = resp.data.total_pages;
            alert('No hay mas registros');
        }
        if(resp.data.data.length > 0) {
            setUsers(resp.data.data);
        }
    }

    const pageNext = () => {
        pageRef.current++
        loadUser()
    }

    const pagePrev = () => {
        if(pageRef.current > 1) {
            pageRef.current--
            loadUser()
        }
    }

    return {
        users,
        pageNext,
        pagePrev
    };
};