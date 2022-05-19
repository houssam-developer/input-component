
import { useEffect, useRef, useState } from 'react';
import './App.css'
import Footer from './components/Footer';
import Input from './components/Input';


function App() {


	return (
		<div className="container">
			<h1>Hello world</h1>
			<Input />
			<Input error />
			<Input disabled />
			<Footer></Footer>
		</div>
	)
}

export default App 
