"use client"
import { cn, getMultipleRandom, getProductBySlug, slugify } from '@/lib/utils'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'
import { UsersIcon, TvIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Button from '@/components/Button'
import Typography from '@/components/Typography'
import { products } from '@/config/products'
import ProductCard from '@/components/ProductCard'

const features = [
  { name: 'Godt til fælleskab', icon: UsersIcon, description: 'Perfekt til når gruppen er samlet' },
  { name: 'Hygge på sofaen', icon: TvIcon, description: "Perfekt til en aften på sofaen" },
]

function ProductPage({ params }: { params: { slug: string[] } }) {

  const product = getProductBySlug(params.slug[0])

  if (!product) return notFound()

  return (
    <div>
      <Container mode="dark">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <Heading
                className='flex justify-between'
                heading={product.name}
                description={product.price + " DKK"}
              >

              </Heading>

            </div>
            {/* Reviews */}
            <div className="mt-4">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <Typography variant="paragraph" size="small">
                  {product.rating}
                  <span className="sr-only"> ud af 5 stjerner</span>
                </Typography>
                <div className="ml-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarFilledIcon
                      key={rating}
                      className={cn(
                        product.rating > rating ? 'text-amber-400' : 'text-slate-200',
                        'h-8 w-8 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div aria-hidden="true" className="ml-4 text-base text-slate-900">
                  ·
                </div>
                <div className="ml-4 flex">
                  <Button asChild variant="link">
                    <a href="#" >
                      Se alle {product.rating} reviews
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Image gallery */}
          <div className="mt-8 lg:col-span-7 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <h2 className="sr-only">Images</h2>

            <div className="grid grid-cols-1 lg:gap-8">
              {product.images.map((image) => (
                <img
                  key={image.name}
                  src={image.url}
                  alt={image.name}
                  className={cn(
                    image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                    'rounded-lg'
                  )}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <form>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <Typography variant="subheading" size="medium">
                    <h2>Antal</h2>
                  </Typography>

                  <div></div>
                </div>


              </div>
              <Button className='w-full'>
                Tilføj til kurv
              </Button>

            </form>

            {/* Product details */}
            <div className="mt-10">
              <Typography variant="subheading" size="medium" asChild >
                <h2>Description</h2>
              </Typography>

              <div
                className="prose prose-sm mt-4 text-slate-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            {/* Features */}
            <section aria-labelledby="features-heading" className="mt-10">
              <h2 id="features-heading" className="sr-only">
                Features
              </h2>

              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name} className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                    <dt>
                      <feature.icon className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      <span className="mt-4 text-sm font-medium text-gray-900">{feature.name}</span>
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </Container>

      <Container type="grid" className='grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3' mode="light">
        <div className='lg:col-span-3'>
          <Typography className='font-display' variant="heading" size="large">
            Anbefalinger
          </Typography>
        </div>
        {
          getMultipleRandom(products, 3).map((product) =>
            <ProductCard
              key={product.id}
              heading={product.name}
              description={product.description}
              href={`/produkter/${slugify(product.name)}`}
              productImage={product.images[0]}
            />)
        }
      </Container>
    </div>
  )
}

export default ProductPage