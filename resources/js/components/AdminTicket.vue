<template>
  <div class="container-fluid">
 <div class="col-xl-10 col-md-6">
      <div class="card card-table">
        <div class="card-header">
          <h3>Ticket</h3>
        </div>
        <div class="card-body">
          <table id="user_table" class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Image Profile</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Modal containing dynamic form for adding/updating user details. -->
    <div
      class="modal fade"
      id="UserModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <!-- Show/hide headings dynamically based on /isFormCreateUserMode value (true/false) -->
            <h6
              class="h4 font-weight-200 float-left modal-title"
              style="margin-left: 40px"
              id="exampleModalLabel"
            >
              Create New Ticket
            </h6>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <!-- Form for adding/updating user details. When submitted call /createUser() function if /isFormCreateUserMode value is true. Otherwise call /updateUser() function. -->
          <form>
            <div class="modal-body">
              <div class="card bg-none card-box">
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    name="user.email"
                    placeholder="Email"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirmed password"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="text-right">
                <button
                  type="button"
                  class="btn btn-warning btn-sm ml-auto"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary btn-sm ml-auto">
                  <span class="fa fa-check"></span>
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.col-xl-10 col-md-6 {
  margin-top: 20px;
}
</style>