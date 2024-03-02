import React from "react";
import { useGlobalContext } from "./userContext";

function Topbar() {
  const { profileuserData } = useGlobalContext();
  return (
    <>
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          class="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i class="fa fa-bars"></i>
        </button>

        <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div class="input-group">
            <input
              type="text"
              class="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                <i class="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown no-arrow d-sm-none">
            <a
              class="nav-link dropdown-toggle"
              href="#!"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-search fa-fw"></i>
            </a>

            <div
              class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form class="form-inline mr-auto w-100 navbar-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          <li class="nav-item dropdown no-arrow mx-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              id="alertsDropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-bell fa-fw"></i>
              <span className="badge badge-danger badge-counter">3+</span>
            </a>
            <ul
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 className="dropdown-header">Alerts Center</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 12, 2019</div>
                  <span className="font-weight-bold">
                    A new monthly report is ready to download!
                  </span>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your
                  account.
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                Show All Alerts
              </a>
            </ul>
          </li>

          <li className="nav-item dropdown no-arrow mx-3">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-envelope fa-fw"></i>

              <span className="badge badge-danger badge-counter">7</span>
            </a>

            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 className="dropdown-header">Message Center</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="img/undraw_profile_1.svg"
                    alt="..."
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    Hi there! I am wondering if you can help me with a problem
                    I've been having.
                  </div>
                  <div className="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="img/undraw_profile_2.svg"
                    alt="..."
                  />
                  <div className="status-indicator"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    I have the photos that you ordered last month, how would you
                    like them sent to you?
                  </div>
                  <div className="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="img/undraw_profile_3.svg"
                    alt="..."
                  />
                  <div className="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    Last month's report looks great, I am very happy with the
                    progress so far, keep up the good work!
                  </div>
                  <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="..."
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    Am I a good boy? The reason I ask is because someone told me
                    that people say this to all dogs, even if they aren't
                    good...
                  </div>
                  <div className="small text-gray-500">
                    Chicken the Dog · 2w
                  </div>
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                Read More Messages
              </a>
            </div>
          </li>


          <div class="topbar-divider d-none d-sm-block"></div>

          <li class="nav-item dropdown no-arrow mr-4">
            <a
              class="nav-link dropdown-toggle"
              href="#!"
              id="userDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                {profileuserData.name}
              </span>
              <img
                class="img-profile rounded-circle"
                src={profileuserData.photo}
                alt=""
              />
            </a>

            <div
              class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a class="dropdown-item" href="#">
                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Topbar;