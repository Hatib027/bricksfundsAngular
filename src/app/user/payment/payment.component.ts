import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  inramount: number = 0;

  user: any;
  public payment = {
    userName: '',
    amount: 0,
    paymentDate: '',
    bankName: '',
    accountNumber: '',
    iffcCode: '',
    status: '0',
    dateofrequest: ''

  }
  constructor(
    private paymentService: PaymentServiceService, private snack: MatSnackBar, private router: Router
    , private loginService: LoginService) { }

  banks: any = [{
    id: '',
    bankname: ""
  }];
  ngOnInit(): void {


    this.user = this.loginService.getUser();

    this.payment.userName = this.user.username;


    this.paymentService.getBanks().subscribe(
      (data) => {
        this.banks = data;
      },
      (error) => {

      }
    )
  }


  public addPayment() {
    this.payment.dateofrequest = this.dateConvert(this.payment.dateofrequest);

    if (this.payment.bankName == '' || this.payment.bankName == null ||
      this.payment.amount == 0 ||
      this.payment.iffcCode == '' || this.payment.iffcCode == null ||
      this.payment.accountNumber == '' || this.payment.accountNumber == null ||
      this.payment.dateofrequest == '' || this.payment.dateofrequest == null

    ) {
      console.log(this.payment)
      this.snack.open("All  fields are required !!", 'Ok', {
        duration: 3000,
      });
      return;
    } else {

      this.paymentService.addProduct(this.payment).subscribe(
        (data) => {

          Swal.fire({
            title: "Good job!",
            text: "Payment Request Sent Successfully",
            icon: "success"
          });
        },
        (error) => {

        }
      );
      console.log(this.payment)
    }
  }

  changeToDollar() {
    console.log("ss");

    this.payment.amount = this.inramount / 80;
  }

  public dateConvert(str: any) {

    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("-");

  }

}