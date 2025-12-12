import React from 'react';
import { FaUsersLine } from "react-icons/fa6";
import { CiShoppingTag } from "react-icons/ci";
import { MdDashboardCustomize } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { MdAddBox } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdInventory2 } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineReceiptLong } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import useRole from '../hooks/useRole';
import Loading from './Loading';
import { NavLink } from 'react-router';



const DashboardLinks = () => {
    const {role }= useRole();
    console.log(role)
   
    return (
        <div className="menu w-full grow" >
                        <ul className="menu w-full grow">
              {/* List item */}
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Dashboard"
                >
                  {/* Home icon */}
                    <MdDashboardCustomize  size={20} />
                  <span className="is-drawer-close:hidden">Dashboard</span>
                </button>
              </li>

              {/* Admin Links-------------------------------------*/}
            
              
                {
                    role === "admin" &&
                    ( <>
                    
                    <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="All Orders"
                >
                  {/*icon */}
                    <CiShoppingTag size={20} />
                  <span className="is-drawer-close:hidden">All Orders</span>
                </button>
              </li>
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="All Products"
                >
                  {/*icon */}
                    <GiClothes size={20} />
                  <span className="is-drawer-close:hidden">All Products</span>
                </button>
              </li>
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Manage Users"
                >
                  {/*icon */}
                   <FaUsersLine size={20} />
                  <span className="is-drawer-close:hidden">Manage Users</span>
                </button>
              </li>
                    
                    
                    </>)
                }
              
              {/* Manager Links-------------------------------------*/}
               {
                role === 'manager' && 
                (<>
                
                <li>
                <NavLink
                to={"/dashboard/add-products"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Add Product"
                >
                  {/*icon */}
                  <MdAddBox  size={20} />
                  <span className="is-drawer-close:hidden">Add Product</span>
                </NavLink>
              </li>
                              <li>
                <NavLink
                to={"/dashboard/approve-orders"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Approve Orders"
                >
                  {/*icon */}
                 <FaClipboardCheck   size={20} />
                  <span className="is-drawer-close:hidden">Approve Orders</span>
                </NavLink>
              </li>
                              <li>
                <NavLink
                to={"/dashboard/manage-products"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Manage Products"
                >
                  {/*icon */}
                 <MdInventory2   size={20} />
                  <span className="is-drawer-close:hidden">Manage Products</span>
                </NavLink>
              </li>
                              <li>
                <NavLink
                to={"/dashboard/pending-orders"}
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Pending Orders"
                >
                  {/*icon */}
                 <FaClipboardList   size={20} />
                  <span className="is-drawer-close:hidden">Pending Orders</span>
                </NavLink>
              </li>
                
                </>)
               }


              {/* Buyer Links-------------------------------------*/}
                 {
                    role === "buyer" && 
                   ( <>
                    
                        <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Orders"
                >
                  {/*icon */}
                 <MdOutlineReceiptLong   size={20} />
                  <span className="is-drawer-close:hidden">My Orders</span>
                </button>
              </li>
                     <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Track Orders"
                >
                  {/*icon */}
             <FiSearch   size={20} />
                  <span className="is-drawer-close:hidden">Track Orders</span>
                </button>
              </li>
                    </>)
                 }
            </ul>
        </div>
    );
};

export default DashboardLinks;