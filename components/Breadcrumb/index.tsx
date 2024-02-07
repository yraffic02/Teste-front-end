import Link from 'next/link';
import { BreadcrumbContainer, BreadcrumbItemList, BreadcrumbList, BreadcrumbStyledLink } from './style';

export type BreadcrumbType = {
    url: string,
    label: string
}

interface IBreadcrumb {
    paths: BreadcrumbType[]
}

export const Breadcrumb = ({ paths }: IBreadcrumb) => {
  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        {paths.map((path: BreadcrumbType, index) => (
          <BreadcrumbItemList key={index}>
            <Link href={path.url}>
              <BreadcrumbStyledLink>
                {path.label}
              </BreadcrumbStyledLink> 
            </Link>
            {index !== paths.length - 1 && <span>&gt;</span>} 
          </BreadcrumbItemList>
        ))}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};