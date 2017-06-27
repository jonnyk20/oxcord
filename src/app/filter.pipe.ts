import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})





export class FilterPipe implements PipeTransform {
    transform(items: any[], term): any {
        console.log('term', term);
      
        return term 
            ? items.filter(item => item.title.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) !== -1 ||item.artist.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) !== -1)
            : items;
    }
}