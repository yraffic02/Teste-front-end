import Link from 'next/link';
import { BreadcrumbContainer, BreadcrumbItemList, BreadcrumbList, BreadcrumbStyledLink } from './style';

interface IBreadcrumb {
    paths: {
        url: string,
        label: string
    }[]
}

export const Breadcrumb = ({ paths }: IBreadcrumb) => {
  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        {paths.map((path, index) => (
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