"Use client"
import Overview from "../components/Overview"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from "react"

export default function DashboardPage(){

    useEffect(() => {
        toast.success("Welcome back to your dashboard!");
    }, [])
    return (

        <div>
            <Overview  />
            <ToastContainer />
        </div>
    )
}