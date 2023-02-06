import App from '../App';

import Todo from "./todo";
import Expenses from "./expenses";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="todo" element={<Todo />} />
        <Route path="expenses" element={<Expenses />} />
      </Routes>
    </BrowserRouter>
  )
}