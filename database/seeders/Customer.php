<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class Customer extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return User::create(['name'=>'Amin','email'=>'alaeldinMusa98@gmail.com','password'=>bcrypt('1234'),'role'=>'customer']);
    }
}
