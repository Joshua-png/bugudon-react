import React from 'react';
import Title from './Title';

export default function Intro(){
    return(
    <React.Fragment>    
      <Title text="GOLD POTENTIAL OF GHANA" />  
      <div class="container pt-2">
        <p class="text-justify pt-2 shadow pl-2 pr-2 pb-2" style={{PlineHeight:1.1}}>The country has vast untapped and undiscovered
          gold reverses within the six (6) major gold belts that run across the
          country. These belts are the Lawra Belt, Bole-Navrongo Belt, Sefwi Belt,
          Asankrangwa Belt, Ashanti Belt, and Kibi-Winneba Belt. Indigenous mining
          of gold in Ghana dates as far back as the 4th century and has sustained
          modern large-scale mechanized mining for over 100 years. In 2019, Ghana's
          total gold was 4.577 million ounces; the small-scale sector accounted for 35
          percent, with the large scale producers contributing the remaining 65 percent
          in 2019 (Ghana Chamber of Mines, 2019). All these outputs are by the private
          sector industry only. Certainly, this is an indication of an enabling environment
          in Ghana’s mine industry.</p>
      </div>
    </React.Fragment>  
    );
}