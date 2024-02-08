import Link from 'next/link';
import { BreadcrumbContainer, BreadcrumbStyledLink } from './style';

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
        {paths.map((path: BreadcrumbType, index) => (
            <Link href={path.url} key={index}>
              <BreadcrumbStyledLink>
                {path.label}
              </BreadcrumbStyledLink> 
              {index !== paths.length - 1 && <span style={{color: '#ffff'}}>&gt;</span>} 
            </Link>
        ))}
    </BreadcrumbContainer>
  );
};