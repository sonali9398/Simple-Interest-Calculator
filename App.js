
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CalculateIcon from '@mui/icons-material/Calculate';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Stack } from '@mui/material';

function App() {
  const[num1, setNum1] = useState();
  const[num2, setNum2] = useState();
  const[num3, setNum3] = useState();
  const [Add, setAdd] = useState('');

  const final = (e) =>{
    e.preventDefault();

    if (num1 ===0 || num2 ===0 || num3 ===0){
      alert("Enter valid number");
    }
    else{
      let Add = (parseInt(num1) * parseInt(num2) * parseInt(num3))/100;
      setAdd(parseInt(Add));
      console.log(typeof(Add))
    }
  }
  const handleClick = (e) =>{
    setAdd(0);
    window.location.reload();
  }
  
  return (
    <>
    {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ></Box> */}
      <div className='app'>
        <div className='container'>
          <div className='heading_text'>
            <h1 className='heading_one'>Interest Calculator</h1>
            <p className='heading_two'>Get to know your interest calculation real quick</p>
          </div>  
          <div  className='total_amount_card'>
            <div className='card_text '>
              <h3 className='total_amount_heading'>Rs. {Add}</h3>
              <p className='total_amount_para'>Total Simple Interest</p>
              
            </div>
          </div>
            <form onSubmit= {final}>
              <div className='input_area'>
                <div className='input_field'>
                  <TextField
                  id ='outlined-search'
                  label='Principle Amount'
                  type='number'
                  value={num1 || ""}
                  onChange={(e) => setNum1(e.target.value)}/>
                </div>
                <div className='input_field'>
                  <TextField
                  id ='outlined-search'
                  label='Rate of Interest'
                  type='number'
                  value={num2 || ""}
                  onChange={(e) => setNum2(e.target.value)}
                />
                </div> 
                <div className='input_field'>
              
                  <TextField
                    id ='outlined-search'
                    label='Time (Year)'
                    type='number'
                    value={num3 || ""}
                    onChange={(e) => setNum3(e.target.value)}
                  />
                </div>
            </div>
           
          
            <div className='button_collection'>
              <Stack spacing={2} direction={'row'}>
                <Button type='submit' className='btn_one' variant='outlined' startIcon={<CalculateIcon/> }>Calculate</Button>
                <Button onClick={handleClick} className='btn_one' variant='contained' startIcon={<RotateLeftIcon/> }>Reset</Button>
              </Stack>
              
            </div>
            </form>
            
            
          
        </div>
      </div>
      
    </>
      );
}

export default App;
