import { Profile } from "./Profile.js"

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = new Profile(data.creator)
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
  }

  getCardHTMLTemplate() {
    return /*html*/`
    <div class="col-12 p-0 mb-3">
      <div class="row bg-light shadow">
        <div class="col-md-4 p-0">
          <img class="img-fluid car-img"
            src="${this.imgUrl}"
            alt="${this.year} ${this.bedrooms} ${this.model}">
        </div>
      </div>
    </div>`
  }
}