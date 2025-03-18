import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Col, Collapse, Row } from 'reactstrap';
import withRouter from '../../Components/Common/withRouter';

// Import Data
import navdata from "../LayoutMenuData";
//i18n
import { withTranslation } from "react-i18next";


const HorizontalLayout = (props) => {
    const [isMoreMenu, setIsMoreMenu] = useState(false);
    const navData = navdata().props.children;
    let menuItems = [];
    let splitMenuItems = [];
    let menuSplitContainer = 6;
    navData.forEach(function (value, key) {
        if (value['isHeader']) {
            menuSplitContainer++;
        }
        if (key >= menuSplitContainer) {
            let val = value;
            val.childItems = value.subItems;
            val.isChildItem = (value.subItems) ? true : false;
            delete val.subItems;
            splitMenuItems.push(val);
        } else {
            menuItems.push(value);
        }
    });
    menuItems.push({ id: 'more', label: 'More', icon: 'ri-briefcase-2-line', link: "/#", stateVariables: isMoreMenu, subItems: splitMenuItems, click: function (e) { e.preventDefault(); setIsMoreMenu(!isMoreMenu); }, });

    const path = props.router.location.pathname;

useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/menu");
        setMenuData(response.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    fetchMenuData();
  }, []);


  const renderMenuItems = (items) => {
    return items.map((item, key) => {
      if (item.isHeader) {
        return <li className="menu-title" key={key}>{item.label}</li>;
      }




    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const initMenu = () => {
            const pathName = process.env.PUBLIC_URL + path;
            const ul = document.getElementById("navbar-nav");
            const items = ul.getElementsByTagName("a");
            let itemsArray = [...items]; // converts NodeList to Array
            removeActivation(itemsArray);
            let matchingMenuItem = itemsArray.find((x) => {
                return x.pathname === pathName;
            });
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem);
            }
        };
        initMenu();
    }, [path, props.layoutType]);

    function activateParentDropdown(item) {
        item.classList.add("active");
        let parentCollapseDiv = item.closest(".collapse.menu-dropdown");

        if (parentCollapseDiv) {

            // to set aria expand true remaining
            parentCollapseDiv.classList.add("show");
            parentCollapseDiv.parentElement.children[0].classList.add("active");
            parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                var parentElementDiv = parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling;
                if (parentElementDiv)
                    if (parentElementDiv.closest(".collapse"))
                        parentElementDiv.closest(".collapse").classList.add("show");
                parentElementDiv.classList.add("active");
                var parentElementSibling = parentElementDiv.parentElement.parentElement.parentElement.previousElementSibling;
                if (parentElementSibling) {
                    parentElementSibling.classList.add("active");
                }
            }
            return false;
        }
        return false;
    }

    const removeActivation = (items) => {
        let actiItems = items.filter((x) => x.classList.contains("active"));

        actiItems.forEach((item) => {
            if (item.classList.contains("menu-link")) {
                if (!item.classList.contains("active")) {
                    item.setAttribute("aria-expanded", false);
                }
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.remove("show");
                }
            }
            if (item.classList.contains("nav-link")) {
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.remove("show");
                }
                item.setAttribute("aria-expanded", false);
            }
            item.classList.remove("active");
        });
    };



    return (
        <li className="nav-item" key={key}>
          {item.subItems ? (
            <>
              <Link
                className="nav-link menu-link"
                to={item.link}
                onClick={item.click}
                data-bs-toggle="collapse"
              >
                <i className={item.icon}></i> {item.label}
              </Link>
              <Collapse isOpen={item.stateVariables} className="menu-dropdown">
                <ul className="nav nav-sm flex-column">
                  {renderMenuItems(item.subItems)}
                </ul>
              </Collapse>
            </>
          ) : (
            <Link className="nav-link menu-link" to={item.link}>
              <i className={item.icon}></i> {item.label}
            </Link>
          )}
        </li>
      );
    });
  };

  return <ul className="navbar-nav">{renderMenuItems(menuItems)}</ul>;
};

HorizontalLayout.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
};

export default withRouter(withTranslation()(HorizontalLayout));