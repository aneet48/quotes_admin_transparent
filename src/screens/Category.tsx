import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal";

const Category = () => {
  const [openModal, setopenModal] = useState(false);
  return (
    <div className="content-section">
      <h2>Categories</h2>
      <div className="categories-list">
        <div className="category-card">
          <h4 className="category-name">
            Inspiration{" "}
            <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" onClick={()=>setopenModal(true)} />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Life <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Love <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Motivation{" "}
            <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>
        <div className="category-card">
          <h4 className="category-name">
            Inspiration{" "}
            <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Life <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Love <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Motivation{" "}
            <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>
        <div className="category-card">
          <h4 className="category-name">
            Inspiration{" "}
            <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Life <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Love <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Motivation{" "}
            <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>
        <div className="category-card">
          <h4 className="category-name">
            Inspiration{" "}
            <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Life <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Love <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Motivation{" "}
            <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>
        <div className="category-card">
          <h4 className="category-name">
            Inspiration{" "}
            <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Life <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Love <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>

        <div className="category-card">
          <h4 className="category-name">
            Motivation{" "}
            <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>
        <div className="category-card">
          <h4 className="category-name">
            Motivation{" "}
            <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>
        <div className="category-card">
          <h4 className="category-name">
            Motivation{" "}
            <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>
        <div className="category-card">
          <h4 className="category-name">
            Motivation{" "}
            <span className="category-quotes--count">(20 quotes)</span>
          </h4>
          <div className="category-action">
            <FontAwesomeIcon icon={faEdit} className="editMenuIcon" />
            <FontAwesomeIcon icon={faTrashAlt} className="trashMenuIcon" />
          </div>
        </div>
      </div>

      {openModal && (
        <Modal title="Add Category" closeModal={()=>setopenModal(false)}>
          <div className="form">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" className="form-field" autoComplete="false" />
            </div>
            <button className="form-btn">Save</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Category;
