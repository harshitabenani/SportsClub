import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image ,Button,ScrollView} from 'react-native'

class EventsScreen extends Component
{
  render()
  {
    return(
    <ScrollView>
     <TouchableOpacity
     onPress={()=>this.props.navigation.navigate('Badi')}
     >
     {/* 3333333 */}

     <View style={styles.container}>
       <Text style={styles.maintext}>BADMINTON TOURNAMENT</Text>
      <Image source={{uri:'https://www.sentinelassam.com/wp-content/uploads/2019/08/Digboi.jpg'}}
             style={styles.mainimg} />
      
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>

      

      <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAACHElEQVR4nO3cTTIEMRjG8TfK0gF83MPOfqo4glMoHwdg7TaWbJQNTjFuYCzY+FtMFKWa6fTbySTj+W3omnQneSbzCl3aTEREpDbABHjiyxSYrGq/o4sD/2m6qv2O7nPkvx2vSr9ruS78XyhAp+QAgQPgGnjpqDUs+sj8dc4YBvY7Yz6n/dQ8kgAXQyc0JAwPR7/nucI7iB28AsfA1oL2nRPJMjhnv8AWcBLnBjlWInATL37cs30zAX5rexqbX+cY2CxefLNn+xYD3IzNn7MPrEf7JjfS2d7oAQFOfkym5K9yg/utJsBWpc5TG2knBeikAJ0UoNN66gn/4QdJCq1Ap+QVGEIIOQZSi9RPmFagkwJ0UoBOCtBJATopQCcF6JQ1QOAOuK3lOIfcK/DdzKjoeHn0B9VuqoFORWtgba+PoXQNrO31clQDu6kGOmkf6KR9YCmqgd1UA520D3TSPrAU1cBuqoFOyfeFUwB3ZvYeQtjLdNxrpeS8l936PrAdNdbARWMaMmbVwMKa3gfWoPV9YDtUA7upBjo1vQ/81s/SPhnaB5ZSYw3MQTWwMAXopACdFKCTAnRSgE4pAc7MzFjwsImWATvx297/8p8S4EP8ephwTms+5/Y4+pWB/bjHfGX+dIvt0TtZEmAbOAPe4hzzPIAHOGf1JT14J/lmC/N358jMds1sI/X8Sr2Y2b2ZXYYQrpY9GBERERERkb99AMXZb8ql0S6jAAAAAElFTkSuQmCC"}}
             style={styles.dateimg} />

             
      
      <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFRUlEQVR4nO2bzW8VVRiHf6eQQmmlBroQiguhYoQVHxF0gbGYYKyJSzWhwA4kceFHI8aF7DRRN8QYTVAofiT+B0ZKrStXmGiARatu6BfhaqwUK9r6uDhn0nNv78zcO/fMtAn3SW5y7uSc9/3NmTNnzpn3HalJkyZNmty9mKIdAqskbZZ0r6QOd3hW0h+SJowx/xWpJ/cOALZIOiipV9IuSdslrYmpfkfSqKQfJA1LumSMmchbY3CAtcAx4FtggewsAMPAUSCu0xoi6AgA2iS9KOk1SZsSqk5JKskOfcneCl0pbSYlvSfpI2PMXONqAwM8A/xa5SrOA98ArwP7gfUJNtYDj7q6F13bSn4Bni7y3BIB2oHBKkKvAwPAfQ3Y3uRsXK9i/xzQHvJcsgjcDlyrEHYTOA60BvTTCpxwtn2uAj2h/NQrag9wo0LQeWBDjj43VhltN4DdefmME7IHmPFEzAKHC/Tf73xGzBTWCW7Y+1f+JvBIBjst7kT6gZYM7fcBJU/HdO63A3bCu1Zx8jsy2jri2enPaGNHRSdcAdbVY6Penv9Q0sOufFtSnzHmWp02IrZ65W1ZDDjffU6LJO2U9EFGPckAT1VMPkcatHfas3W6QVsvVGjra8ReNQdtlC9yzgewGawDnD3/6TAGrK2lXa23wElJD7jyb7JL3ZXGy7LLa0nqkXS8lkapHeB68lXv0JvGmFJc/eXCGPO7pLe8QwPUsIGqZQQ8r8VNyrikc/XLK4xPZDVKUrek59Ia1NIBR73yGWPMPxmEFYIx5o6kM96h1Ik6sQOwLzMOuL/zkj7LrK44Ppe04MpPAJuTKqeNgINenRFjzHSD4nLHGDMlacT9bZE9h1jSOqDXKw9ll1U4vtbe2FpK7wB/g/FdZjnF42tN3CTFdoDboPibi6xL3uXgqld+MGmzlTQCtkiKVlNTxpg/QyiTJPd83usd2lvLM7tWnNZovmqTfQ1fldUJdjq9cuiFzzuym5iIPklfAd8ntJmU9EUdcYOSpOh1XKcW1wdlJHVAh1eeja2VjWrP52fdL41aH8W3vHLsi9i6X0QE4u+M7QiqQskjwL/qHbG1snFB0qmKY19L+jGhzRVJX9bh4x6vXP/8BdzvbS8n6zaQbLsVeBuYcG903g85CTofU57+7iwGWoA5z0jsfbTSADo93X9legy62fZn79DOkCJzxtc6lvTkSJsEL3vlA7G1Vh6Pe+XLsbWU3gHDXvnJzHKKx9c6HFsrDaCbxfD2v0BS9HZFgI0nRkHVhTTNiSPAJSeMuL+rJRUW/WmAw5JWufKw2x5nB5ucEHGdgEHP0ABrgHFPb6aASzWjE57REwG05gJwsuJihVlbAK94hktAVxDDAQE2UB4+fymk8TZsZkbEYDDjgQAuePpGg119z8EhymkoNBYSlobG8kmhwaalRMwC+3JxVJ+m/cBtT9fZPJ21Y9NS/PkgU3g8kJ7K8PhP2Ey1XJ32UJ4gUVqOkeCuvH/yU8DW9JZhnO9maYpMYXMCdm3iD/sZYFdR/iMRu7FpKT6DwMYcfXZRPttHV77Yk/cEbcOmpfiUsAuSYI8h7GLsZMWQj+75YoZ9grh1wKcsJUqUzLyBYjFRcryK/bPkPeHVAzaFZqyK0HlgCDiFTYPtTLDRCTwGvAFconqq7ChwKJTu0MnSa2UzMwZk4/NxTMu+t7/lNETJ0klpteOS3pX0sQuDr1zcPXvEXflG0+UvYnMJc9mFFvHBxCbZNzTRBxMPaTHkVsmcyj+YGMo7JL8cn8y0KP6TmcmiP5lp0qRJkyZ3M/8D7IQlH/UpF2IAAAAASUVORK5CYII="}}
             style={styles.timeimg} />

             

                   <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADpUlEQVRoge2ZXYhNaxzG/2uGMzKMmclnLhDTFI5pRI6ECKXIhXSkXLly4QZXx/GZUsgNuaJzJVwIZUq+Sr4yFBouDi4m4kgxo2GcMPNzsZ/drLZt7Xet9a7Zjs5Tu//ea/3f53n+613vx17L7CdB4JMMqDGzZWa2wMyazGy8mdXqdKeZtZvZfTO7YmYtQRB0+dRPDaAROAp0444PwBGgodz+DRgM7Ac+y1wv0ApsAearwGp9GnXsT+COcgE+AXuBQeUqogFok5ke4BgwMUb7ScDxUEG3gDFZei5mohl4LQN/A9NTcM0AHovrOTDNp9co4YZQEReAOg+c9cDFUDHZ9ozGRFuoiAEeuQcCl0K3WXZjRgM7fzul7oki/PXAE2ns9M2fF2nU7NSTZkw46MzUBPAeGJ2FwFFdqWPeyb/VOiGtw76Ja8gtYL1xptgUeg2hXhnik3iNrlCrN9LSmnel+btLfoUj7wLFs8lsJUJea6FLsmshTYrXY9tJjrxWU2SW4LoOTFD8J3wQIPw7CILA4/kXBdqRcO2RGsWXjvk+kNca5pLsWkiv4pfYdpKjp0A7Eq6FdCp6X80jkNfqjMwSXMdIh5mNNrMRFhonnsdEIYYrOhXi2iOPFac45vvAVMUnLsmuhbQpOk2FnvBrgXYkXAu5pzgntp3kmKX4wBsjUAd80e7XaTpMqVcN/Kud9gjf5Le091nplbi41nJp3XVt43prmZmdU1wdz1YirFJs8c4MjNPW+iNQW7pFYp3BQJd6ZHJWItcksD4TgZzG2ri3VRqRR4DXx60hjdasL5YBVcArCS3KgP83cb8Fqn3zF4ptl9ilDLhPi3ufb+5iYrVAhwTneuSdonXjIzDWF28p0d0q5LJHzlPiPOiL00W0Hngj4RUe+OaJ60O/9UZIfIPEnwJVKXgqyL1mANjm06OrgQH0PQfelIJnnTieZz5TRZhYJBPvgFEJ2g8FXoqjP7Y+kWZaZOSvBG0PqO2NrBbYOGYm0fc4dUmMdrPJ/TX4BDRn6dEZwEZd2XZgqEN+FfBQbbJ5fZAEQCVwU8YOOeTvUe4D4Jf+8OgMcu9PunWLLYvIm0vfv80Z/enRGcBmXelXwMgi5+uAZ8rZUQaLbtDidl5GzwMVoXMBcEbnrgKV5fRaEsDI0NqwK3R8q469BcaV06MzgMXkdrI95B4kLNX3yPHzQwL4Qz3QoV74scfF96AxcZI+nAmPmf8UgCHAbX1KLpT/w8y+AvpIZp4tMGybAAAAAElFTkSuQmCC"}}
             style={styles.venueimg} />
      </View>
      <View>
      <Text style={styles.infotext}>12th-15th Dec     5:00-10:00 PM       Badi Court</Text>
      </View>
     </View>
     </TouchableOpacity>


     {/* 3333333 */}

     <TouchableOpacity
     onPress={()=>this.props.navigation.navigate('Darts')}>

     <View style={styles.container1}>
       <Text style={styles.maintext}>DARTS CHAMIONSHIP</Text>
      <Image source={{uri:'https://static.vinepair.com/wp-content/uploads/2017/03/darts-int.jpg'}}
             style={styles.mainimg} />
      
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>

      

      <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAACHElEQVR4nO3cTTIEMRjG8TfK0gF83MPOfqo4glMoHwdg7TaWbJQNTjFuYCzY+FtMFKWa6fTbySTj+W3omnQneSbzCl3aTEREpDbABHjiyxSYrGq/o4sD/2m6qv2O7nPkvx2vSr9ruS78XyhAp+QAgQPgGnjpqDUs+sj8dc4YBvY7Yz6n/dQ8kgAXQyc0JAwPR7/nucI7iB28AsfA1oL2nRPJMjhnv8AWcBLnBjlWInATL37cs30zAX5rexqbX+cY2CxefLNn+xYD3IzNn7MPrEf7JjfS2d7oAQFOfkym5K9yg/utJsBWpc5TG2knBeikAJ0UoNN66gn/4QdJCq1Ap+QVGEIIOQZSi9RPmFagkwJ0UoBOCtBJATopQCcF6JQ1QOAOuK3lOIfcK/DdzKjoeHn0B9VuqoFORWtgba+PoXQNrO31clQDu6kGOmkf6KR9YCmqgd1UA520D3TSPrAU1cBuqoFOyfeFUwB3ZvYeQtjLdNxrpeS8l936PrAdNdbARWMaMmbVwMKa3gfWoPV9YDtUA7upBjo1vQ/81s/SPhnaB5ZSYw3MQTWwMAXopACdFKCTAnRSgE4pAc7MzFjwsImWATvx297/8p8S4EP8ephwTms+5/Y4+pWB/bjHfGX+dIvt0TtZEmAbOAPe4hzzPIAHOGf1JT14J/lmC/N358jMds1sI/X8Sr2Y2b2ZXYYQrpY9GBERERERkb99AMXZb8ql0S6jAAAAAElFTkSuQmCC"}}
             style={styles.dateimg} />

             
      
      <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFRUlEQVR4nO2bzW8VVRiHf6eQQmmlBroQiguhYoQVHxF0gbGYYKyJSzWhwA4kceFHI8aF7DRRN8QYTVAofiT+B0ZKrStXmGiARatu6BfhaqwUK9r6uDhn0nNv78zcO/fMtAn3SW5y7uSc9/3NmTNnzpn3HalJkyZNmty9mKIdAqskbZZ0r6QOd3hW0h+SJowx/xWpJ/cOALZIOiipV9IuSdslrYmpfkfSqKQfJA1LumSMmchbY3CAtcAx4FtggewsAMPAUSCu0xoi6AgA2iS9KOk1SZsSqk5JKskOfcneCl0pbSYlvSfpI2PMXONqAwM8A/xa5SrOA98ArwP7gfUJNtYDj7q6F13bSn4Bni7y3BIB2oHBKkKvAwPAfQ3Y3uRsXK9i/xzQHvJcsgjcDlyrEHYTOA60BvTTCpxwtn2uAj2h/NQrag9wo0LQeWBDjj43VhltN4DdefmME7IHmPFEzAKHC/Tf73xGzBTWCW7Y+1f+JvBIBjst7kT6gZYM7fcBJU/HdO63A3bCu1Zx8jsy2jri2enPaGNHRSdcAdbVY6Penv9Q0sOufFtSnzHmWp02IrZ65W1ZDDjffU6LJO2U9EFGPckAT1VMPkcatHfas3W6QVsvVGjra8ReNQdtlC9yzgewGawDnD3/6TAGrK2lXa23wElJD7jyb7JL3ZXGy7LLa0nqkXS8lkapHeB68lXv0JvGmFJc/eXCGPO7pLe8QwPUsIGqZQQ8r8VNyrikc/XLK4xPZDVKUrek59Ia1NIBR73yGWPMPxmEFYIx5o6kM96h1Ik6sQOwLzMOuL/zkj7LrK44Ppe04MpPAJuTKqeNgINenRFjzHSD4nLHGDMlacT9bZE9h1jSOqDXKw9ll1U4vtbe2FpK7wB/g/FdZjnF42tN3CTFdoDboPibi6xL3uXgqld+MGmzlTQCtkiKVlNTxpg/QyiTJPd83usd2lvLM7tWnNZovmqTfQ1fldUJdjq9cuiFzzuym5iIPklfAd8ntJmU9EUdcYOSpOh1XKcW1wdlJHVAh1eeja2VjWrP52fdL41aH8W3vHLsi9i6X0QE4u+M7QiqQskjwL/qHbG1snFB0qmKY19L+jGhzRVJX9bh4x6vXP/8BdzvbS8n6zaQbLsVeBuYcG903g85CTofU57+7iwGWoA5z0jsfbTSADo93X9legy62fZn79DOkCJzxtc6lvTkSJsEL3vlA7G1Vh6Pe+XLsbWU3gHDXvnJzHKKx9c6HFsrDaCbxfD2v0BS9HZFgI0nRkHVhTTNiSPAJSeMuL+rJRUW/WmAw5JWufKw2x5nB5ucEHGdgEHP0ABrgHFPb6aASzWjE57REwG05gJwsuJihVlbAK94hktAVxDDAQE2UB4+fymk8TZsZkbEYDDjgQAuePpGg119z8EhymkoNBYSlobG8kmhwaalRMwC+3JxVJ+m/cBtT9fZPJ21Y9NS/PkgU3g8kJ7K8PhP2Ey1XJ32UJ4gUVqOkeCuvH/yU8DW9JZhnO9maYpMYXMCdm3iD/sZYFdR/iMRu7FpKT6DwMYcfXZRPttHV77Yk/cEbcOmpfiUsAuSYI8h7GLsZMWQj+75YoZ9grh1wKcsJUqUzLyBYjFRcryK/bPkPeHVAzaFZqyK0HlgCDiFTYPtTLDRCTwGvAFconqq7ChwKJTu0MnSa2UzMwZk4/NxTMu+t7/lNETJ0klpteOS3pX0sQuDr1zcPXvEXflG0+UvYnMJc9mFFvHBxCbZNzTRBxMPaTHkVsmcyj+YGMo7JL8cn8y0KP6TmcmiP5lp0qRJkyZ3M/8D7IQlH/UpF2IAAAAASUVORK5CYII="}}
             style={styles.timeimg} />

             

                   <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADpUlEQVRoge2ZXYhNaxzG/2uGMzKMmclnLhDTFI5pRI6ECKXIhXSkXLly4QZXx/GZUsgNuaJzJVwIZUq+Sr4yFBouDi4m4kgxo2GcMPNzsZ/drLZt7Xet9a7Zjs5Tu//ea/3f53n+613vx17L7CdB4JMMqDGzZWa2wMyazGy8mdXqdKeZtZvZfTO7YmYtQRB0+dRPDaAROAp0444PwBGgodz+DRgM7Ac+y1wv0ApsAearwGp9GnXsT+COcgE+AXuBQeUqogFok5ke4BgwMUb7ScDxUEG3gDFZei5mohl4LQN/A9NTcM0AHovrOTDNp9co4YZQEReAOg+c9cDFUDHZ9ozGRFuoiAEeuQcCl0K3WXZjRgM7fzul7oki/PXAE2ns9M2fF2nU7NSTZkw46MzUBPAeGJ2FwFFdqWPeyb/VOiGtw76Ja8gtYL1xptgUeg2hXhnik3iNrlCrN9LSmnel+btLfoUj7wLFs8lsJUJea6FLsmshTYrXY9tJjrxWU2SW4LoOTFD8J3wQIPw7CILA4/kXBdqRcO2RGsWXjvk+kNca5pLsWkiv4pfYdpKjp0A7Eq6FdCp6X80jkNfqjMwSXMdIh5mNNrMRFhonnsdEIYYrOhXi2iOPFac45vvAVMUnLsmuhbQpOk2FnvBrgXYkXAu5pzgntp3kmKX4wBsjUAd80e7XaTpMqVcN/Kud9gjf5Le091nplbi41nJp3XVt43prmZmdU1wdz1YirFJs8c4MjNPW+iNQW7pFYp3BQJd6ZHJWItcksD4TgZzG2ri3VRqRR4DXx60hjdasL5YBVcArCS3KgP83cb8Fqn3zF4ptl9ilDLhPi3ufb+5iYrVAhwTneuSdonXjIzDWF28p0d0q5LJHzlPiPOiL00W0Hngj4RUe+OaJ60O/9UZIfIPEnwJVKXgqyL1mANjm06OrgQH0PQfelIJnnTieZz5TRZhYJBPvgFEJ2g8FXoqjP7Y+kWZaZOSvBG0PqO2NrBbYOGYm0fc4dUmMdrPJ/TX4BDRn6dEZwEZd2XZgqEN+FfBQbbJ5fZAEQCVwU8YOOeTvUe4D4Jf+8OgMcu9PunWLLYvIm0vfv80Z/enRGcBmXelXwMgi5+uAZ8rZUQaLbtDidl5GzwMVoXMBcEbnrgKV5fRaEsDI0NqwK3R8q469BcaV06MzgMXkdrI95B4kLNX3yPHzQwL4Qz3QoV74scfF96AxcZI+nAmPmf8UgCHAbX1KLpT/w8y+AvpIZp4tMGybAAAAAElFTkSuQmCC"}}
             style={styles.venueimg} />
      </View>
      <View>
      <Text style={styles.infotext}>25th-27th Oct    3:00-8:00 PM     Near the Pool</Text>
      </View>
     </View>
     </TouchableOpacity>

    {/* 3333333 */}

    <TouchableOpacity
    onPress={()=>this.props.navigation.navigate('BB')}>

     <View style={styles.container1}>
       <Text style={styles.maintext}>BASKETBALL TOURNAMENT</Text>
      <Image source={{uri:'https://tsnapps.go.tz/public/uploads/a536e61d5a9a685eb2a3b9e77797445f.jpg'}}
             style={styles.mainimg} />
      
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>

      

      <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAACHElEQVR4nO3cTTIEMRjG8TfK0gF83MPOfqo4glMoHwdg7TaWbJQNTjFuYCzY+FtMFKWa6fTbySTj+W3omnQneSbzCl3aTEREpDbABHjiyxSYrGq/o4sD/2m6qv2O7nPkvx2vSr9ruS78XyhAp+QAgQPgGnjpqDUs+sj8dc4YBvY7Yz6n/dQ8kgAXQyc0JAwPR7/nucI7iB28AsfA1oL2nRPJMjhnv8AWcBLnBjlWInATL37cs30zAX5rexqbX+cY2CxefLNn+xYD3IzNn7MPrEf7JjfS2d7oAQFOfkym5K9yg/utJsBWpc5TG2knBeikAJ0UoNN66gn/4QdJCq1Ap+QVGEIIOQZSi9RPmFagkwJ0UoBOCtBJATopQCcF6JQ1QOAOuK3lOIfcK/DdzKjoeHn0B9VuqoFORWtgba+PoXQNrO31clQDu6kGOmkf6KR9YCmqgd1UA520D3TSPrAU1cBuqoFOyfeFUwB3ZvYeQtjLdNxrpeS8l936PrAdNdbARWMaMmbVwMKa3gfWoPV9YDtUA7upBjo1vQ/81s/SPhnaB5ZSYw3MQTWwMAXopACdFKCTAnRSgE4pAc7MzFjwsImWATvx297/8p8S4EP8ephwTms+5/Y4+pWB/bjHfGX+dIvt0TtZEmAbOAPe4hzzPIAHOGf1JT14J/lmC/N358jMds1sI/X8Sr2Y2b2ZXYYQrpY9GBERERERkb99AMXZb8ql0S6jAAAAAElFTkSuQmCC"}}
             style={styles.dateimg} />

             
      
      <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFRUlEQVR4nO2bzW8VVRiHf6eQQmmlBroQiguhYoQVHxF0gbGYYKyJSzWhwA4kceFHI8aF7DRRN8QYTVAofiT+B0ZKrStXmGiARatu6BfhaqwUK9r6uDhn0nNv78zcO/fMtAn3SW5y7uSc9/3NmTNnzpn3HalJkyZNmty9mKIdAqskbZZ0r6QOd3hW0h+SJowx/xWpJ/cOALZIOiipV9IuSdslrYmpfkfSqKQfJA1LumSMmchbY3CAtcAx4FtggewsAMPAUSCu0xoi6AgA2iS9KOk1SZsSqk5JKskOfcneCl0pbSYlvSfpI2PMXONqAwM8A/xa5SrOA98ArwP7gfUJNtYDj7q6F13bSn4Bni7y3BIB2oHBKkKvAwPAfQ3Y3uRsXK9i/xzQHvJcsgjcDlyrEHYTOA60BvTTCpxwtn2uAj2h/NQrag9wo0LQeWBDjj43VhltN4DdefmME7IHmPFEzAKHC/Tf73xGzBTWCW7Y+1f+JvBIBjst7kT6gZYM7fcBJU/HdO63A3bCu1Zx8jsy2jri2enPaGNHRSdcAdbVY6Penv9Q0sOufFtSnzHmWp02IrZ65W1ZDDjffU6LJO2U9EFGPckAT1VMPkcatHfas3W6QVsvVGjra8ReNQdtlC9yzgewGawDnD3/6TAGrK2lXa23wElJD7jyb7JL3ZXGy7LLa0nqkXS8lkapHeB68lXv0JvGmFJc/eXCGPO7pLe8QwPUsIGqZQQ8r8VNyrikc/XLK4xPZDVKUrek59Ia1NIBR73yGWPMPxmEFYIx5o6kM96h1Ik6sQOwLzMOuL/zkj7LrK44Ppe04MpPAJuTKqeNgINenRFjzHSD4nLHGDMlacT9bZE9h1jSOqDXKw9ll1U4vtbe2FpK7wB/g/FdZjnF42tN3CTFdoDboPibi6xL3uXgqld+MGmzlTQCtkiKVlNTxpg/QyiTJPd83usd2lvLM7tWnNZovmqTfQ1fldUJdjq9cuiFzzuym5iIPklfAd8ntJmU9EUdcYOSpOh1XKcW1wdlJHVAh1eeja2VjWrP52fdL41aH8W3vHLsi9i6X0QE4u+M7QiqQskjwL/qHbG1snFB0qmKY19L+jGhzRVJX9bh4x6vXP/8BdzvbS8n6zaQbLsVeBuYcG903g85CTofU57+7iwGWoA5z0jsfbTSADo93X9legy62fZn79DOkCJzxtc6lvTkSJsEL3vlA7G1Vh6Pe+XLsbWU3gHDXvnJzHKKx9c6HFsrDaCbxfD2v0BS9HZFgI0nRkHVhTTNiSPAJSeMuL+rJRUW/WmAw5JWufKw2x5nB5ucEHGdgEHP0ABrgHFPb6aASzWjE57REwG05gJwsuJihVlbAK94hktAVxDDAQE2UB4+fymk8TZsZkbEYDDjgQAuePpGg119z8EhymkoNBYSlobG8kmhwaalRMwC+3JxVJ+m/cBtT9fZPJ21Y9NS/PkgU3g8kJ7K8PhP2Ey1XJ32UJ4gUVqOkeCuvH/yU8DW9JZhnO9maYpMYXMCdm3iD/sZYFdR/iMRu7FpKT6DwMYcfXZRPttHV77Yk/cEbcOmpfiUsAuSYI8h7GLsZMWQj+75YoZ9grh1wKcsJUqUzLyBYjFRcryK/bPkPeHVAzaFZqyK0HlgCDiFTYPtTLDRCTwGvAFconqq7ChwKJTu0MnSa2UzMwZk4/NxTMu+t7/lNETJ0klpteOS3pX0sQuDr1zcPXvEXflG0+UvYnMJc9mFFvHBxCbZNzTRBxMPaTHkVsmcyj+YGMo7JL8cn8y0KP6TmcmiP5lp0qRJkyZ3M/8D7IQlH/UpF2IAAAAASUVORK5CYII="}}
             style={styles.timeimg} />

             

                   <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADpUlEQVRoge2ZXYhNaxzG/2uGMzKMmclnLhDTFI5pRI6ECKXIhXSkXLly4QZXx/GZUsgNuaJzJVwIZUq+Sr4yFBouDi4m4kgxo2GcMPNzsZ/drLZt7Xet9a7Zjs5Tu//ea/3f53n+613vx17L7CdB4JMMqDGzZWa2wMyazGy8mdXqdKeZtZvZfTO7YmYtQRB0+dRPDaAROAp0444PwBGgodz+DRgM7Ac+y1wv0ApsAearwGp9GnXsT+COcgE+AXuBQeUqogFok5ke4BgwMUb7ScDxUEG3gDFZei5mohl4LQN/A9NTcM0AHovrOTDNp9co4YZQEReAOg+c9cDFUDHZ9ozGRFuoiAEeuQcCl0K3WXZjRgM7fzul7oki/PXAE2ns9M2fF2nU7NSTZkw46MzUBPAeGJ2FwFFdqWPeyb/VOiGtw76Ja8gtYL1xptgUeg2hXhnik3iNrlCrN9LSmnel+btLfoUj7wLFs8lsJUJea6FLsmshTYrXY9tJjrxWU2SW4LoOTFD8J3wQIPw7CILA4/kXBdqRcO2RGsWXjvk+kNca5pLsWkiv4pfYdpKjp0A7Eq6FdCp6X80jkNfqjMwSXMdIh5mNNrMRFhonnsdEIYYrOhXi2iOPFac45vvAVMUnLsmuhbQpOk2FnvBrgXYkXAu5pzgntp3kmKX4wBsjUAd80e7XaTpMqVcN/Kud9gjf5Le091nplbi41nJp3XVt43prmZmdU1wdz1YirFJs8c4MjNPW+iNQW7pFYp3BQJd6ZHJWItcksD4TgZzG2ri3VRqRR4DXx60hjdasL5YBVcArCS3KgP83cb8Fqn3zF4ptl9ilDLhPi3ufb+5iYrVAhwTneuSdonXjIzDWF28p0d0q5LJHzlPiPOiL00W0Hngj4RUe+OaJ60O/9UZIfIPEnwJVKXgqyL1mANjm06OrgQH0PQfelIJnnTieZz5TRZhYJBPvgFEJ2g8FXoqjP7Y+kWZaZOSvBG0PqO2NrBbYOGYm0fc4dUmMdrPJ/TX4BDRn6dEZwEZd2XZgqEN+FfBQbbJ5fZAEQCVwU8YOOeTvUe4D4Jf+8OgMcu9PunWLLYvIm0vfv80Z/enRGcBmXelXwMgi5+uAZ8rZUQaLbtDidl5GzwMVoXMBcEbnrgKV5fRaEsDI0NqwK3R8q469BcaV06MzgMXkdrI95B4kLNX3yPHzQwL4Qz3QoV74scfF96AxcZI+nAmPmf8UgCHAbX1KLpT/w8y+AvpIZp4tMGybAAAAAElFTkSuQmCC"}}
             style={styles.venueimg} />
      </View>
      <View>
      <Text style={styles.infotext}>6th-10th Jan      3:00-8:00 PM        BB Court</Text>
      </View>
     </View>

</TouchableOpacity>
   </ScrollView>
    
    )
  }
}

const styles=StyleSheet.create({
  
  container:{
  height:237,
  marginTop:85,
  marginLeft:20,
  marginRight:20,
  marginBottom:20,
  borderRadius:10,
  backgroundColor:'#14256A',
  borderColor:'#FFF'},

 container1:{
  height:237,
  marginTop:60,
  marginLeft:20,
  marginRight:20,
  marginBottom:20,
  borderRadius:10,
  backgroundColor:'#14256A',
  borderColor:'#FFF'},

  mainimg:{
   height:130,
   width:335,
   marginTop:13,
  },
  
  maintext:{
    fontSize:20,
    color:'#FFF',
    marginTop:13,
    textAlign:'center',
    fontWeight:'bold',
   },

    
   dateimg:{

     height:27,
     width:27,
    
     marginTop:5
   },
   timeimg:{

     height:27,
     width:27,
  
     marginTop:5
   },
   venueimg:{

     height:27,
     width:27,
     
     marginTop:5
   },

   infotext:{

     fontSize:14,
     color:'#FFF',
     marginLeft:10,
     marginBottom:7,
     fontWeight:'bold',
        },



})

export default EventsScreen