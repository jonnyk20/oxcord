import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  pure: false
})



export class SortByPipe {
  transform(array: Array<string>, args: string): Array<string> {
     if (array==undefined) {
      return null;
    } else {


    array.sort((a: any, b: any) => {
	    if ( a[args] > b[args] ){
	    	return -1;
	    }else if( a[args] < b[args] ){
	        return 1;
	    }else{
	    	return 0;	
	    }
    });
    return array;
  }
  }
}


