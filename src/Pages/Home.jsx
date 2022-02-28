import React, {useState, useEffect} from 'react';
import BarChart from '../Components/BarChart';
import PieChart from '../Components/PieChart';
import {atom, useRecoilState} from "recoil";
import Item from '../Components/Item';
import {createItem} from "../actions";
import './Styles.css'


function Home() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [category1, setCategory1] = useState(0);
    const [category2, setCategory2] = useState(0);
    const [category3, setCategory3] = useState(0);
    const [category4, setCategory4] = useState(0);

    // FORM STATE
    const [name, setName] = useState("");
    const [selectCategory, setSelectCategory] = useState("");
    const [status, setStatus] = useState("Available");
   
    
    useEffect(() => {
        setLoading(true);
        
        const getItems = async () => {
            const url = "https://api-nginx-lms.accelego.id/api/v1/hiring";
            const resp = await fetch(url);
            const body = await resp.json();
            const data = await body.value.hiringTest;
            setItems(data);
            setLoading(false);
        }

        getItems().catch(console.error);
        
    }, [])

    useEffect(() => {
        countCategories();
    }, [items])

    const countCategories = () => {
        items.forEach(e => {
            switch(e.category) {
                case "Category 1": 
                    setCategory1(category1 => category1 + 1);
                    break;
                case "Category 2": 
                    setCategory2(category2 => category2 + 1);
                    break;
                case "Category 3": 
                    setCategory3(category3 => category3 + 1);
                    break;
                case "Category 4": 
                    setCategory4(category4 => category4 + 1);
                    break;
                default:
                    break;
            }
        })
    }
    
    const title = {
        textAlign: "left",
        padding: "10px"
    }

    // Tab Container
    const gridContainer = {
        display: "flex",
        justifyContent: "space-evenly",
        gap: "20px",
        padding: "20px"
        
    }

    // TABS Styles
    const inputTab = {
        textAlign: "left",
        borderRadius: "10px",
        border: "0",
        padding: "0px 60px",
        flexGrow: "0",
        backgroundColor: "rgba(240, 240, 240, 0.8)"
    }

    const categoriesTab = {
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "10px",
        padding: "0px 60px",
        flexGrow: "0"
    }

    const availabilityTab = {
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "10px",
        flexGrow: "0"
    }

    // Styles
    const categoryList = {
        display: "flex",
        justifyContent: "space-evenly",
        textAlign: "center",
        borderStyle: "solid",
        borderRadius: "20px",
        backgroundColor: "rgba(240, 240, 240, 0.8)"
    }


    const tableContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px"
    }

    const inputText = {
        padding: "10px",
        margin: "10px 0",
        width: "100%",
        border: "0",
        boxShadow: "0 0 15px 4px rgba(0,0,0,0.06)",
        borderRadius: "10px"
    }

    const inputSelect = {
        padding: "10px",
        margin: "10px 0",
        width: "100%",
        borderRadius: "10px",
        backgroundColor: "white",
        border: "0",
        boxShadow: "0 0 15px 4px rgba(0,0,0,0.06)",
    }

    const inputForm = {
        padding: "30px",
        width: "200px",
        height: "100%",
    }

    const availableRadio = {

    }

    const buttonSubmit = {
        padding: "10px",
        border: "none",
        fontWeight: "600",
        borderRadius: "10px",
        backgroundColor: "rgba(46, 120, 4, 0.8)",
        color: "white",
        width: "100%"
    }

    const formMargin = "1rem"

    const categoryStyle = {
        borderRight: "2px solid", 
        padding: "5px"
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        createItem({
            name,
            category: selectCategory,
            availability: status
        }).then(response => {
            console.log(response);
        })
    }


    return(
        <div className='Home'>
            <h1 style={title}>Charts and Table Visualization</h1>
            <div style={gridContainer}>
                <div style={inputTab}>
                    <div style={inputForm}>
                        <form>
                            {/* NAME */}
                            <div style={{marginBottom: formMargin}}>
                                <label htmlFor='name'>Name</label>
                                <br />
                                <input style={inputText} type="text" id="name" name="name" placeholder='Enter your name'
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                />
                                <br />
                            </div>
                            
                            {/* CATEGORY */}
                            <div style={{marginBottom: formMargin}}>
                                <label htmlFor='category'>Category</label>
                                <br />
                                <select defaultValue="none" style={inputSelect} name="category" id="category" 
                                    onChange={(e) => {
                                        setSelectCategory(e.target.value);
                                    }}
                                >
                                    <option disabled value="none">Select Category</option>
                                    <option value="Category 1">Category 1</option>
                                    <option value="Category 2">Category 2</option>
                                    <option value="Category 3">Category 3</option>
                                    <option value="Category 4">Category 4</option>
                                </select>
                            </div>
                            <br />

                            {/* AVAILABILITY */}
                            <div style={{marginBottom: formMargin}}>
                                <div>
                                    <span>Availability</span>
                                </div>
                                <br />
                                <div>
                                    <label htmlFor="radioA">Available 
                                        <input type="radio" id="radioA" name="availability" value="Available"
                                            onChange={(e) => {
                                                setStatus(e.target.value);
                                            }}
                                        />
                                    </label>
                                    
                                    
                                    <label htmlFor="radioB">Full
                                        <input type="radio" id="radioB" name="availability" value="Full"
                                            onChange={(e) => {
                                                setStatus(e.target.value);
                                            }}
                                        /> 
                                    </label>
                                </div>
                                  
                                <br />
                            </div>

                            {/* ARRIVAL */}
                            <div style={{marginBottom: formMargin}}>
                                <label htmlFor='arrival'>Arrival</label>
                                <br />
                                <input type="text" id="arrival" name="arrival" disabled placeholder="Value hasn't arrived"/>
                                <br />
                            </div>


                            <button style={buttonSubmit} type="submit" onClick={handleSubmit}>Submit Form</button>
                        </form>
                    </div>
                </div>
                
                <div style={categoriesTab}>
                    <h1>Category Ratio</h1>
                    {loading ? <p>Loading ...</p> : <div style={categoryList}>
                        <div style={categoryStyle}>
                            <h3>Category 1</h3>
                            <span>{category1}</span>
                        </div>
                        <div style={categoryStyle}>
                            <h3>Category 2</h3>
                            <span>{category2}</span>
                        </div>
                        <div style={categoryStyle}>
                            <h3>Category 3</h3>
                            <span>{category3}</span>
                        </div>
                        <div style={{ padding: "5px"}}>
                            <h3>Category 4</h3>
                            <span>{category4}</span>
                        </div>
                    </div>}
                    
                    <BarChart categories={[category1, category2, category3, category4]}/>
                </div>
                
                <div style={availabilityTab}>
                    <h1>Availability Ratio</h1>
                    {loading ? <span>Loading...</span> : <PieChart items={items}/>}
                </div>
            </div>

            {/* TABLE */}
            <div style={tableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Availability</th>
                            <th>Arrival</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? <tr><td>loading....</td></tr> : items.map(e => {
                            return(
                                <Item key={e._id} element={e}/>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;