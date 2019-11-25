drop table [Product] 
GO
drop table [Category] 
GO
drop table [Brands] 
GO
drop table [ByteImages]
GO
create table Brands (
	[id] [int] identity(1,1) primary key not null,
	[Name] [varchar](20) not null,
) 
GO

insert into Brands ([Name])
values 
	('Adidas'),
	('Nike'),
	('Reebok'),
	('CP Co.')
GO 

create table Category (
	[id] [int] identity(1,1) primary key not null,
	[Name] [varchar](20) not null,
)
GO

insert into Categories ([Name])
values 
	('Shirt'),
	('Shoes'),
	('Jumper'),
	('Bottoms')
GO 

create table Product (
	[id] [int] identity(1,1) primary key not null,
	[Name] [varchar](40) not null,
	[CategoryId] [int] null
	foreign key ([CategoryId])
	references [Category] ([id]),
	[BrandId] [int] null
	foreign key ([BrandId])
	references [Brands]([id])
)
GO

insert into Products ([Name], [BrandId], [CategoryId])
values
	('Cool Shirt', 1, 1),
	('Cooler Shirt', 2, 1),
	('Nice Shoes', 1, 2),
	('Blue Shoes', 1, 2),
	('Skinny Jeans', 3, 4),
	('Classic Pink Hoodie', 4, 3)
GO

select * from Products
inner join Brands on Products.BrandId = Brands.id
inner join Categories on Products.CategoryId = Categories.id

update Products
set ImageId = 1
where id > 0

insert into ByteImages ([Name], [Data])

create table ByteImages (
	[id] [int] identity(1,1) primary key not null,
	[name] [nvarchar](max),
	[Data] [nvarchar](max)
) 
GO