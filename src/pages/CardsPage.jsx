import Header from '../components/Header';
import Main from '../components/Main';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Cities from '../components/Cities';
import {  apiGetElections, backend } from '../data/elections';
import {  sortNameCity  } from '../data/elections';
import { useState } from 'react';

export default function CardsPage() {

const elections = apiGetElections()
const cityName = sortNameCity()


//console.log('oi amor', backend.cities[0].name)
function renderCities(value,event,elections){
  let contador = 0
  let idCity
  elections.forEach(element => {
  if(value === element.city[0].name){
    idCity=  element.city[0].id
 }
 return 
  });

return event.cities.map((item)=>{
  if(item.name === value){
    elections.map((e)=>{
      if( e.cityId === idCity){
        contador++
        return contador
      }
      return console.log()
    })
    return <div key={item.idCity}>
       <div className='flex flex-row justify-center pb-5 font-bold'>Eleições em {item.name}</div>
       <Cities>
         <div className='px-8'><b>Total de eleitores:</b> {item.votingPopulation.toLocaleString()}</div> 
         <div className='px-8'><b>Abstenções:</b> {item.absence.toLocaleString()}</div>  
         <div className='px-8'><b>comparecimento:</b> {item.presence.toLocaleString()}</div>   
        </Cities>
        <div className='flex flex-row justify-center pb-5  mt-5'>Total de eleitores {contador}</div>
    </div>
  }
});
}
const [selectValue, setSelectValue] = useState('Asgard');  
function selectOptions(e){
return setSelectValue(e)
 }

 function renderizar(e,eleicao,backend){
  let idCity
  let totalVotos
  let presentes
  let percentual
  eleicao.forEach(element => {
  if(e === element.city[0].name){
    idCity=  element.city[0].id
 }
 return 
  });
  switch (e) {
    case "Asgard":
      return  eleicao.map((item) =>{
backend.cities.map((item) =>{
  if(idCity=== item.id)
  {
  return  presentes = item.presence  
  }
})
        if( item.cityId === idCity){
          totalVotos = presentes* item.votes
          percentual = ( item.votes / presentes ) * 100 
          return <Card key={item.id}>
           <div className='flex flex-row justify-between'>
                   <div>
                            <img className='w-12 rounded-full'  src = {`img/${item.cadidate[0].name.toLowerCase()}.png`} alt={item.id}></img>
                   </div>
                   <div>
                          { <p>{percentual.toFixed(2).replace(' . ', ' , ')+ '%'}</p> }
                          <p>{totalVotos.toLocaleString('pt-BR').slice(0,9)}</p>
                          
                   </div>
           </div>
           <div className='flex flex-row justify-center mt-5 '>{item.cadidate[0].name}</div>
           <div className='flex flex-row justify-center '>xxxxxxx</div>
         </Card>
         
        }
        return console.log('itens analisados')
        })


    case "Gotham":
      return  eleicao.map((item) =>{
backend.cities.map((item) =>{
  if(idCity=== item.id)
  {
  return  presentes = item.presence  
  }
})
        if( item.cityId === idCity){
          totalVotos = presentes* item.votes
          percentual = ( item.votes / presentes ) * 100 
          return <Card key={item.id}>
           <div className='flex flex-row justify-between'>
                   <div>
                            <img className='w-12 rounded-full'  src = {`img/${item.cadidate[0].name.toLowerCase()}.png`} alt={item.id}></img>
                   </div>
                   <div>
                          { <p>{percentual.toFixed(2).replace(' . ', ' , ')+ '%'}</p> }
                          <p>{totalVotos.toLocaleString('pt-BR').slice(0,9)}</p>
                          
                   </div>
           </div>
           <div className='flex flex-row justify-center mt-5 '>{item.cadidate[0].name}</div>
           <div className='flex flex-row justify-center '>xxxxxxx</div>
         </Card>
         
        }
        return console.log('itens analisados')
        })
      
    case "Metropolis":
    
      return  eleicao.map((item) =>{
        backend.cities.map((item) =>{
          if(idCity=== item.id)
          {
          return  presentes = item.presence  
          }
        })
                if( item.cityId === idCity){
                  totalVotos = presentes* item.votes
                  percentual = ( item.votes / presentes ) * 100 
                  return <Card key={item.id}>
                   <div className='flex flex-row justify-between'>
                           <div>
                                    <img className='w-12 rounded-full'  src = {`img/${item.cadidate[0].name.toLowerCase()}.png`} alt={item.id}></img>
                           </div>
                           <div>
                                  { <p>{percentual.toFixed(2).replace(' . ', ' , ')+ '%'}</p> }
                                  <p>{totalVotos.toLocaleString('pt-BR').slice(0,9)}</p>
                                  
                           </div>
                   </div>
                   <div className='flex flex-row justify-center mt-5 '>{item.cadidate[0].name}</div>
                   <div className='flex flex-row justify-center '>xxxxxxx</div>
                 </Card>
                 
                }
                return console.log('itens analisados')
                })
    case "Smallville":
      
      return  eleicao.map((item) =>{
        backend.cities.map((item) =>{
          if(idCity=== item.id)
          {
          return  presentes = item.presence  
          }
        })
                if( item.cityId === idCity){
                  totalVotos = presentes* item.votes
                  percentual = ( item.votes / presentes ) * 100 
                  return <Card key={item.id}>
                   <div className='flex flex-row justify-between'>
                           <div>
                                    <img className='w-12 rounded-full'  src = {`img/${item.cadidate[0].name.toLowerCase()}.png`} alt={item.id}></img>
                           </div>
                           <div>
                                  { <p>{percentual.toFixed(2).replace(' . ', ' , ')+ '%'}</p> }
                                  <p>{totalVotos.toLocaleString('pt-BR').slice(0,9)}</p>
                                  
                           </div>
                   </div>
                   <div className='flex flex-row justify-center mt-5 '>{item.cadidate[0].name}</div>
                   <div className='flex flex-row justify-center '>xxxxxxx</div>
                 </Card>
                 
                }
                return console.log('itens analisados')
                })
    case "Themyscira":
   
      return  eleicao.map((item) =>{
        backend.cities.map((item) =>{
          if(idCity=== item.id)
          {
          return  presentes = item.presence  
          }
        })
                if( item.cityId === idCity){
                  totalVotos = presentes* item.votes
                  percentual = ( item.votes / presentes ) * 100 
                  return <Card key={item.id}>
                   <div className='flex flex-row justify-between'>
                           <div>
                                    <img className='w-12 rounded-full'  src = {`img/${item.cadidate[0].name.toLowerCase()}.png`} alt={item.id}></img>
                           </div>
                           <div>
                                  { <p>{percentual.toFixed(2).replace(' . ', ' , ')+ '%'}</p> }
                                  <p>{totalVotos.toLocaleString('pt-BR').slice(0,9)}</p>
                                  
                           </div>
                   </div>
                   <div className='flex flex-row justify-center mt-5 '>{item.cadidate[0].name}</div>
                   <div className='flex flex-row justify-center '>xxxxxxx</div>
                 </Card>
                 
                }
                return console.log('itens analisados')
                })
    default:
      console.log("Desculpe, estamos sem nenhuma ");
  }
 }





//console.log('nome cidade', nomeCidade)
  return  (
    <>

    <Header>
react-elections
    </Header>
    <Main>
        { <div className='flex flex-col items-center m-6 ' >
            <label>Escolha o município:</label>
            <select valeu={selectValue} className='shadow-sm w-auto m-4 pr-4 ' onChange={e => selectOptions(e.target.value)} >
            {/* <select valeu={selectValue} className='shadow-sm w-auto m-4 pr-4 ' onChange={e => selectOptions(e.target.value)} >  */}
            {
             cityName.map((e) => {
                return <option key={e.name}>{ e.name}</option>
             })
            }
            </select>
        </div> }
        <div className='diego'>
                      {
                        renderCities(selectValue,backend,elections)
                      }
                      </div>
            <div className='flex flex-row items-center justify-center  border p-7'>
                <Cards>
                    <div className="flex flex-row items-center justify-center flex-wrap">
                     {
                     renderizar(selectValue,elections,backend)
                     }
                    </div> 
                 </Cards>
            </div>
   
    </Main>

    </>

  )
}
