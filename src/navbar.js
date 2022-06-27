import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import "./navCss.css";
function Navbar() {
  return (
    <div>
      <div className="mainNav">
        <div className="title">
          <h2>
            Re:T{" "}
            <span id="x">
              <BsFillEmojiSunglassesFill />
            </span>
            ur
          </h2>
        </div>
        <div className="List">
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link " href="#">
                Store List
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Tour Locator
              </a>
            </li>
            <li class="nav-item">
              <select>
                <option>System Pages</option>
                <option>System Pages 2</option>
                <option>System pages 3</option>
                <option>System pages 4</option>
              </select>
            </li>
            <li class="nav-item">
              <select>
                <option>Layout Variant</option>
                <option>Layout Variant 2</option>
                <option>Layout Variant 3</option>
                <option>Layout Variant 4</option>
              </select>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Tutorial
              </a>
            </li>
            <li class="nav-item">
              <button>+ Submit a Tour</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
