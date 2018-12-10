import { ServerComponent } from './server/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CapitalizePipe } from './capitalize.pipe';
import { LikesComponent } from './likes/likes.component';
import { FacebookLikeComponent } from './facebook-like/facebook-like.component';
import { DiscountComponent } from './discount/discount.component';
import { PanelComponent } from './panel/panel.component';
import { PhoneDirective } from './phone.directive';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { CapitalizewordDirective } from './capitalizeword.directive';
import { PostsComponent } from './posts/posts.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { StudentComponent } from './student/student.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { UsersComponent } from './users/users.component';
import { TodoComponent } from './todo/todo.component';
import { InstalikeComponent } from './instalike/instalike.component';
import { TraineeComponent } from './trainee/trainee.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    LoginComponent,
    CapitalizePipe,
    LikesComponent,
    FacebookLikeComponent,
    DiscountComponent,
    PanelComponent,
    PhoneDirective,
    RegisterComponent,
    SignupComponent,
    CapitalizewordDirective,
    PostsComponent,
    LifecycleComponent,
    StudentComponent,
    NavbarComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    UsersComponent,
    TodoComponent,
    InstalikeComponent,
    TraineeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
    // RouterModule.forRoot([
    //   { path : 'home', component : HomeComponent  },
    //   { path : 'features' , component : FeaturesComponent},
    //   { path : 'pricing' , component : PricingComponent },
    //   { path : 'home/users/:name/:age', component : UsersComponent}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
