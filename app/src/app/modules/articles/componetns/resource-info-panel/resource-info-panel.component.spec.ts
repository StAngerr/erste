import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceInfoPanelComponent } from './resource-info-panel.component';

describe('ResourceInfoPanelComponent', () => {
  let component: ResourceInfoPanelComponent;
  let fixture: ComponentFixture<ResourceInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
