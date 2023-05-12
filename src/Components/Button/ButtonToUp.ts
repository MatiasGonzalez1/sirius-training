
export const upButtonStyle = {
    color:'white', 
    cursor:'pointer', 
    fontSize:'40px',
    borderRadius:'50%', 
    boxShadow: 5,
    position: 'fixed',
    right:'15px',
    bottom:'15px',
    transition:'all .5s',
    "&:hover":{
      boxShadow: '1px 1px 25px 1px #e6dada80'
    }
  };
  

 export const up = ()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  };