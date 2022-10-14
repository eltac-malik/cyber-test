import React,{useState,useEffect} from 'react'

function History() {

    const [history,setHistory] = useState<Object[]>([])

    useEffect(()=>
    {
        let ls = JSON.parse(localStorage.getItem("history")||"")
        setHistory(ls)
    })

    return (
        <div className='history'>
            {
                history&&history.map((e:any)=>
                    {
                        return(

            <div className="card" >
            <img className="card-img-top" src={e.img} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                {e.name}
              </p>
            </div>
          </div>
                        )
                    })
            }
        </div>
    )
}

export default History
