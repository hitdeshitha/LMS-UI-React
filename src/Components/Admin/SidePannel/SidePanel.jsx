import React from "react";
import "../../../assets/css/SidePanel.css";

const Sidepanel = () => {
  return (
    <div>
      {/* offcanvas start */}
      <div
        class="offcanvas offcanvas-start sidebar-nav bg-dark"
        tabindex="-1"
        id="sidebar"
      >
        <div class="offcanvas-body p-0">
          <nav class="navbar-dark">
            <ul class="navbar-nav">
              <li>
                <div class="text-muted small fw-bold text-uppercase px-3">
                  LMS
                </div>
              </li>
              <li>
                <a href="#" class="nav-link px-3 active">
                  <span class="me-2">
                    <i class="bi bi-speedometer2"></i>
                  </span>
                  <span>Dashboard</span>
                </a>
              </li>
              <li class="my-4">
                <hr class="dropdown-divider bg-light" />
              </li>
              <li>
                <div class="text-muted small fw-bold text-uppercase px-3 mb-3">
                  Interface
                </div>
              </li>
              <li>
                {/* <a
                  class="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#layouts"
                >
                  <span class="me-2">
                    <i class="bi bi-layout-split"></i>
                  </span>
                  <span>Layouts</span>
                  <span class="ms-auto">
                    <span class="right-icon">
                      <i class="bi bi-chevron-down"></i>
                    </span>
                  </span>
                </a> */}
                <div class="collapse" id="layouts">
                  <ul class="navbar-nav ps-3">
                    <li>
                      <a href="#" class="nav-link px-3">
                        <span class="me-2">
                          <i class="bi bi-speedometer2"></i>
                        </span>
                        <span>Dashboard</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <li>
                <a href="#" class="nav-link px-3">
                  <span class="me-2">
                    <i class="bi bi-book-fill"></i>
                  </span>
                  <span>Pages</span>
                </a>
              </li>
              <li class="my-4">
                <hr class="dropdown-divider bg-light" />
              </li>
              <li>
                <div class="text-muted small fw-bold text-uppercase px-3 mb-3">
                  Addons
                </div>
              </li>
              <li>
                <a href="#" class="nav-link px-3">
                  <span class="me-2">
                    <i class="bi bi-graph-up"></i>
                  </span>
                  <span>Charts</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-3">
                  <span class="me-2">
                    <i class="bi bi-table"></i>
                  </span>
                  <span>Tables</span>
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
      {/* offcanvas end */}
    </div>

    // <div className="col-md-3">
    //   {/* <div className="side-panel">
    //     <h2>Logo</h2>
    //     <button>Add Video</button>
    //     <button>Craate Cateory</button>
    //   </div> */}
    //   <nav class="side-nav">
    //     <ul class="nav-menu">
    //       <li class="nav-item"><a href="#"><i class="fas fa-tachometer-alt"></i><span class="menu-text">Dashboard</span></a></li>
    //       <li class="nav-item"><a href="#"><i class="fas fa-user"></i><span class="menu-text">Users</span></a></li>
    //       <li class="nav-item active"><a href="#"><i class="fas fa-file-alt"></i><span class="menu-text">Posts</span></a></li>
    //       <li class="nav-item"><a href="#"><i class="fas fa-play "></i><span class="menu-text">Media</span></a></li>
    //       <li class="nav-item"><a href="#"><i class="fas fa-sign-out-alt"></i><span class="menu-text">exit</span></a></li>
    //     </ul>
    //   </nav>
    // </div>
  );
};

export default Sidepanel;
