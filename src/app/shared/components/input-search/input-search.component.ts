import { Component, Input, OnInit  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, debounceTime, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  ngOnInit(): void {
    this.searchForm
      .valueChanges
      .pipe(
        debounceTime(300),
        map(() => this.searchForm.getRawValue()),
      )
      .subscribe(filters => {
        // this.todosFacade.updateTodosFilters(filters);
      })
  }



  searchForm = new FormGroup({
    searchQuery: new FormControl<string>("", {
      nonNullable: true,
    }),
  });
}
