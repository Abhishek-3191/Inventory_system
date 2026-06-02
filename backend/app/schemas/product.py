from pydantic import BaseModel, Field

class ProductCreate(BaseModel):
    name: str
    sku: str
    price: float
    quantity: int = Field(ge=0)

class ProductResponse(BaseModel):
    id: int
    name: str
    sku: str
    price: float
    quantity: int

    class Config:
        from_attributes = True