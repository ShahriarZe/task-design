import { LuLayoutDashboard, LuUsers2 } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { GoPackage } from "react-icons/go";
import { AiOutlineDollar } from "react-icons/ai";
import { TbPackages } from "react-icons/tb";
import { RiTodoLine } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-200">
                            <tr>
                                
                                <th>Package Name</th>
                                <th>BD Price</th>
                                <th>Discount Price</th>
                                <th>USD Price</th>
                                <th>Discount Price</th>
                                <th>Duration</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>                              
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>                              
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>                              
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>                              
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 5 */}
                            <tr>
                                
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>                              
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 6 */}
                            <tr>
                                
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>                              
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 7 */}
                            <tr>
                                
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>                              
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 8 */}
                            <tr>
                                
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>                              
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 9 */}
                            <tr>
                                
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>                              
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 10 */}
                            <tr>
                                
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>                              
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 11 */}
                            <tr>
                                
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>                              
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a><LuLayoutDashboard /> Dashboard</a></li>
                    <li><a><LuUsers2 /> Users</a></li>
                    <li><a><IoChatbubblesOutline /> Chat</a></li>
                    <li><a><MdOutlineContactMail /> Be Social</a></li>
                    <li><a><MdEventNote /> Events</a></li>
                    <li><a><GoPackage /> Package</a></li>
                    <li><a><AiOutlineDollar /> Payment</a></li>
                    <li><a><TbPackages /> Portal Management</a></li>
                    <li><a><RiTodoLine /> Content Management</a></li>
                    <li><a><MdOutlineContactSupport /> Support</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;