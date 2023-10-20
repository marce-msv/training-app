import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Exercise } from 'src/app/interfaces/exercise';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-last-trainings',
  templateUrl: './last-trainings.component.html',
  styleUrls: ['./last-trainings.component.css'],
})
export class LastTrainingsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'date',
    'name',
    'duration',
    'calories',
    'state',
  ];

  dataSource = new MatTableDataSource<Exercise>();
  @ViewChild(MatSort) sort: MatSort;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.dataSource.data =
      this.trainingService.getCompletedOrCancelledExercises();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  doFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
