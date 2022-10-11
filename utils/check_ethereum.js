// A simple utility function to check if window has ethereum object 
// injected by metamask or similar wallet 

function etherPresent() {
    //console.log(typeof window.ethereum)
    return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'
}

export { etherPresent }