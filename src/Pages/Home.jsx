import React from 'react';

function Home() {
    
    const title = {
        textAlign: "left",
        padding: "10px"
    }

    const gridContainer = {
        display: "flex",
        justifyContent: "space-evenly"
    }

    const inputTab = {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        padding: "100px",
        borderRadius: "5px",
        borderStyle: "solid"
    }

    const categoriesTab = {
        borderStyle: "solid",
        borderRadius: "5px",
        padding: "0px 60px"
    }

    const categoryList = {
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        borderStyle: "solid",
        borderRadius: "20px"
    }

    const availabilityTab = {
        borderStyle: "solid",
        borderRadius: "5px"
    }

    const formMargin = "1rem"


    return(
        <div className='Home'>
            <h1 style={title}>Charts and Table Visualization</h1>
            <div style={gridContainer}>
                <div style={inputTab}>
                    <form method="post">
                        {/* NAME */}
                        <div style={{marginBottom: formMargin}}>
                            <label htmlFor='name'>Name</label>
                            <br />
                            <input type="text" id="name" name="name"/>
                            <br />
                        </div>
                        
                        {/* CATEGORY */}
                        <div style={{marginBottom: formMargin}}>
                            <label htmlFor='category'>Category</label>
                            <br />
                            <select name="category" id="category">
                                <option disabled>Select Category</option>
                                <option value="1">Category 1</option>
                                <option value="2">Category 2</option>
                                <option value="3">Category 3</option>
                                <option value="4">Category 4</option>
                            </select>
                        </div>
                        <br />

                        {/* AVAILABILITY */}
                        <div style={{marginBottom: formMargin}}>
                            <label htmlFor="availability">Availability</label>
                            <br />
                            <label htmlFor="available">Available</label>
                            <input type="radio" id="available" name="Available" value="available"/>
                            <label htmlFor='full'>Full</label>
                            <input type="radio" id="full" name="full" value="full"/>
                            <br />
                        </div>

                        {/* ARRIVAL */}
                        <div style={{marginBottom: formMargin}}>
                            <label>ARRIVAL</label>
                            <br />
                            <input type="text" disabled placeholder="Value hasn't arrived"/>
                            <br />
                        </div>


                        <button type="submit">Submit Form</button>
                    </form>
                </div>
                <div style={categoriesTab}>
                    <h1>Category Ratio</h1>
                    <div style={categoryList}>
                        <div>
                            <h3>Category 1</h3>
                            <span>7</span>
                        </div>
                        <div>
                            <h3>Category 2</h3>
                            <span>7</span>
                        </div>
                        <div>
                            <h3>Category 3</h3>
                            <span>7</span>
                        </div>
                        <div>
                            <h3>Category 4</h3>
                            <span>7</span>
                        </div>
                    </div>
                </div>
                <div style={availabilityTab}>
                    <h1>Availability Ratio</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;