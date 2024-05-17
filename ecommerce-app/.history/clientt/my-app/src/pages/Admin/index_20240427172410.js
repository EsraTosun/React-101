import React from "react";
import "./styles.css";

import { Box } from "@chakra-ui/react";
import { Link, Routes, Route, useRouteMatch } from "react-router-dom"; // Değişiklik

import Home from "./Home";
import Products from "./Products";
import Orders from "./Orders";

function Admin() {
    const { path, url } = useRouteMatch();

    return (
        <div>
            <nav>
                <ul className="admin-menu">
                    <li>
                        <Link to={url}>Home</Link>
                    </li>
                    <li>
                        <Link to={`${url}/orders`}>Orders</Link>
                    </li>
                    <li>
                        <Link to={`${url}/products`}>Products</Link>
                    </li>
                </ul>
            </nav>

            <Box mt="10">
                <Routes> {/* Değişiklik */}
                    <Route exact path={path} element={<Home />} /> {/* Değişiklik */}
                    <Route path={`${path}/orders`} element={<Orders />} /> {/* Değişiklik */}
                    <Route path={`${path}/products`} element={<Products />} /> {/* Değişiklik */}
                </Routes> {/* Değişiklik */}
            </Box>
        </div>
    );
}

export default Admin;
