import { async, TestBed } from '@angular/core/testing';
import { SharedAuthModule } from './shared-auth.module';

describe('SharedAuthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAuthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAuthModule).toBeDefined();
  });
});
