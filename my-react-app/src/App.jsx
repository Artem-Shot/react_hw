import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContainer from './components/MainContainer';


function App() {
    return (
        <div>
            <div className="row bg-primary-subtle text-white border border-warning p-5">
                <Header />
            </div>

            <div className="row">
                <div className="col-3 bg-light border-right p-4 border border-warning">
                    <Sidebar />
                </div>

                <div className="col-9 p-5 border border-warning">
                    <MainContainer />
                </div>
            </div>
        </div>
    );
}


export default App;