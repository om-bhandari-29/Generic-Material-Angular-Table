
/*
==> Fields and their uses
-> columns: required,
-> data: required
-> filter: not required, if null => no filter
-> filterPlaceholder: not required, if null => 'Filter'
-> footer: not required, if null => no footer
-> pagination: not required, if null => 50 items per page
-> pageSize: not required, if null => min size of pagination
-> tableMinWidth: not required, if null => 500px is the default  value
-> filteredData: not required, passes the filter back
-> buttonClick: not required, passes a action an payload in a string array back to the app.component
*/

/*
==> Data that we can pass in Mat Table Generic component
-> [columns]="columns"
-> [buttons]="buttons"
-> [data]="data"
-> [filter]="true"
-> [filterPlaceholder]="'Filter any value'"
-> [footer]="footer" 
-> [pagination]="[5, 25, 100]"
-> [pageSize]="5"
-> [tableMinWidth]="400"
-> (filteredData)="applyFilter($event)"
-> (buttonClick)="buttonClick($event)"
*/
