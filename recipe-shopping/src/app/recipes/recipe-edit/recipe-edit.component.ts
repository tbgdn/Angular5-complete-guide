import {Component, OnInit} from '@angular/core';
import {ActivateRoutes} from '@angular/router/src/operators/activate_routes';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  private id: number;
  private editMode = false;

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.edit || false;
      }
    );
  }

}
